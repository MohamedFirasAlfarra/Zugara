// import apiClient from '  ./apiClient';
import apiClient from "../Reqest/ApiClinte";
// Login function
// export const login = async (credentials) => {
//   const response = await apiClient.post('/login', credentials);
//   return response.data;
// };
export const login = async (user) => {
  try {
    const response = await apiClient.post("/login", user); // افترض أن مسار الـ API هو /login
    return response.data; // إعادة البيانات من الاستجابة
  } catch (error) {
    throw error; // رمي الخطأ للتعامل معه في Login.jsx
  }
};

// Register function
export const register = async (data) => {
  const response = await apiClient.post('/register', data);
  return response.data;
};

// Get user profile
export const getUserProfile = async () => {
  const response = await apiClient.get('/user');
  return response.data;
};

// Logout function
export const logout = async () => {
  const response = await apiClient.post('/logout');
  return response.data;
};
