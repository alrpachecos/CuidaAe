// src/services/api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;
const api = axios.create({
  baseURL: API_URL,
});

console.log(API_URL);
// Interceptor para injetar token no header
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    config.headers!['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
