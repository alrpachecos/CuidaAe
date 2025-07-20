import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchMe,
  loginApp,
  logoutApp,
  registerApp,
} from '@services/authService';
import { User } from '@sharedTypes/AuthenticationTypes';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: 'patient' | 'professional',
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLoading: true,
  error: '',

  initialize: async () => {
    try {
      set({ isLoading: true, error: null });
      const token = await AsyncStorage.getItem('authToken');
      console.log('token', token);
      if (!token) {
        set({ user: null, isLoading: false });
        return;
      }

      const user = await fetchMe();
      set({ user, isLoading: false });
    } catch (error) {
      console.error('Erro ao inicializar sessão:', error);
      set({
        user: null,
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : 'Erro ao inicializar a aplicação',
      });
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true });
      const { user } = await loginApp(email, password);
      set({ user, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erro ao fazer login',
      });
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (name, email, password, role) => {
    try {
      set({ isLoading: true });
      const { user } = await registerApp(name, email, password, role);
      set({ user, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Erro ao cadastrar',
      });
      set({ isLoading: false });
    }
  },

  logout: async () => {
    await logoutApp();
    set({ user: null });
  },
}));
