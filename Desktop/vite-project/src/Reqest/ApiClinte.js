import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Replace with your backend's base URL
    timeout: 10000, // Request timeout (optional)
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  export const login = async (user) => {
    const response = await apiClient.post("http://127.0.0.1:8000/api/login", user); // افترض أن `/login` هو المسار الخاص بـ API
    return response.data; // تأكد أن الخادم يعيد البيانات المناسبة
  };
  
  // Request interceptor to add authorization token
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor for handling errors globally
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized errors (e.g., redirect to login)
        console.error('Unauthorized, logging out...');
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  
  export default apiClient;