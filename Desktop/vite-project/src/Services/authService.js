import axios from 'axios';
import apiClient from '../Reqest/ApiClinte';

export const login = async (userData) => {
  const response = await apiClient.post(`/login`, userData);
  return response.data;
};

export const getUserDetails = async () => {
  const response = await apiClient.get(`/details`);
  return response.data;
};
