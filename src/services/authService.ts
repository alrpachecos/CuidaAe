import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@sharedTypes/AuthenticationTypes';

import api from './apiService';
const TOKEN_KEY = 'authToken';

export async function registerApp(
  name: string,
  email: string,
  password: string,
  role: 'patient' | 'professional',
) {
  const { data } = await api.post<{ user: User; token: string }>(
    '/auth/register',
    {
      name,
      email,
      password,
      role: role.toUpperCase(),
    },
  );
  await AsyncStorage.setItem(TOKEN_KEY, data.token);
  return data;
}

export async function loginApp(email: string, password: string) {
  const { data } = await api.post<{ user: User; token: string }>(
    '/auth/login',
    {
      email,
      password,
    },
  );
  await AsyncStorage.setItem(TOKEN_KEY, data.token);
  return data;
}

export async function logoutApp() {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

export async function fetchMe() {
  const { data } = await api.get<User>('/auth/me');
  console.log('data', data);
  return data;
}
