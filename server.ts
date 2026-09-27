import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK on server-side with required User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `
Sie sind der offizielle KI-Assistent für "Zugara" – ein führender deutscher Fachbetrieb für:
1. Umzüge (Privatumzüge, Firmen- und Büroumzüge, Einpackservice, Möbelmontage, Halteverbotszonen)
2. Haushaltsauflösungen & Nachlassräumungen (einfühlsam, diskret, faire Wertanrechnung auf Mobiliar und Antiquitäten)
3. Entrümpelungen (besenrein, Keller, Dachböden, Gewerbe, umweltgerechtes Recycling mit Nachweis)

Wichtige Zugara-Merkmale:
- 100% verbindliche Festpreisgarantie nach kostenloser Besichtigung
- Vollversichert bis 2,5 Mio. € nach § 451 HGB
- Telefon: 030 8920 4410 | E-Mail: kontakt@zugara.de | Zentrale: Berlin (Einsatz bundesweit)
- Mo – Sa: 07:00 – 19:00 Uhr

Ihre Aufgabe:
- Helfen Sie Kunden freundlich, kompetent und präzise bei allen Fragen rund um Umzug, Räumung und Kosten.
- Unterstützen Sie bei der Schätzung des Volumens (m³), der Terminauswahl oder bei der Vorbereitung eines Angebots.
- Reagieren Sie immer in der Sprache, in der der Kunde schreibt:
  - Wenn auf Deutsch gefragt wird: antworten Sie auf professionellem, warmem und klarem Deutsch.
  - إذا سأل العميل باللغة العربية: أجب باللغة العربية الفصحى الراقية والواضحة وقدم له المساعدة الكاملة حول خدمات شركة Zugara في ألمانيا.
  - Wenn auf Englisch gefragt wird: antworten Sie auf Englisch.
- Seien Sie lösungsorientiert, beruhigend und laden Sie bei konkreten Buchungsabsichten dazu ein, das Anfrageformular auf der Seite zu nutzen oder die Telefonnummer 030 8920 4410 anzurufen.
`;

// Gemini Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Graceful fallback if no key set
      const lastUserMsg = messages[messages.length - 1]?.text || '';
      const isArabic = /[\u0600-\u06FF]/.test(lastUserMsg);

      const fallbackReply = isArabic
        ? 'مرحباً بك في Zugara! يسعدنا مساعدتك في Umzüge (الانتقال) و Entrümpelungen (إخلاء المنازل وتنظيفها). يمكنك الاتصال بنا مباشرة على 030 8920 4410 أو ملء استمارة الطلب للحصول على عرض سعر ثابت مجاناً!'
        : 'Herzlich willkommen bei Zugara! Gerne unterstützen wir Sie bei Umzügen, Haushaltsauflösungen und besenreinen Entrümpelungen. Rufen Sie uns gerne direkt an unter 030 8920 4410 oder nutzen Sie unser Anfrageformular für ein kostenloses Festpreisangebot!';

      return res.json({ reply: fallbackReply });
    }

    // Format chat history for GoogleGenAI SDK
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    let reply = '';

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
      reply = response.text || '';
    } catch (primaryError: any) {
      console.warn('Primary model error, attempting fallback model:', primaryError.message);
      // Fallback model if primary has temporary spike
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        reply = fallbackResponse.text || '';
      } catch (fallbackError: any) {
        console.error('All model attempts failed:', fallbackError);
        const lastMsg = messages[messages.length - 1]?.text || '';
        const isArabic = /[\u0600-\u06FF]/.test(lastMsg);
        reply = isArabic
          ? 'يسعدنا جداً خدمتك في Zugara! للحصول على استشارة فورية أو حجز موعد انتقال وإخلاء فوري، اتصل بنا مباشرة على 030 8920 4410 أو تفضل بإرسال نموذج الطلب في الموقع!'
          : 'Gerne helfen wir Ihnen bei Zugara weiter! Für eine sofortige Beratung oder Terminvereinbarung für Umzüge und Entrümpelungen erreichen Sie uns direkt unter 030 8920 4410 oder über unser Anfrageformular.';
      }
    }

    if (!reply) {
      reply = 'Gerne helfen wir Ihnen weiter. Bitte stellen Sie Ihre Frage oder rufen Sie uns direkt an unter 030 8920 4410.';
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return res.status(500).json({
      error: 'Fehler bei der Kommunikation mit dem KI-Dienst',
      details: error.message,
    });
  }
});

// Mount Vite or serve static dist
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
