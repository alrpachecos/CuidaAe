import { create } from 'zustand';
import { authService } from '../services/authService';
import { User, Session } from '@supabase/gotrue-js';
import { auth } from '../lib/supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: string | null;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  isLoading: false,
  error: null,

  initialize: async () => {
    try {
      set({ isLoading: true });
      const { data: { session } } = await auth.getSession();
      if (session) {
        set({ user: session.user, session });
      }
    } catch (error) {
      console.error('Erro ao inicializar sessão:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (name, email, password) => {
    try {
      set({ isLoading: true, error: null });
      await authService.signUp({ name, email, password });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro ao cadastrar' });
    } finally {
      set({ isLoading: false });
    }
  },

  signIn: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const { user, session } = await authService.signIn({ email, password });
      set({ user, session });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro ao fazer login' });
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    try {
      set({ isLoading: true, error: null });
      await authService.signOut();
      set({ user: null, session: null });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro ao sair' });
    } finally {
      set({ isLoading: false });
    }
  },

  resetPassword: async (email) => {
    try {
      set({ isLoading: true, error: null });
      await authService.resetPassword(email);
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro ao resetar senha' });
    } finally {
      set({ isLoading: false });
    }
  },

  updatePassword: async (newPassword) => {
    try {
      set({ isLoading: true, error: null });
      await authService.updatePassword(newPassword);
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Erro ao atualizar senha' });
    } finally {
      set({ isLoading: false });
    }
  },
}));

// Configurar listener para mudanças na sessão
auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    useAuthStore.setState({ user: session?.user ?? null, session });
  }
  if (event === 'SIGNED_OUT') {
    useAuthStore.setState({ user: null, session: null });
  }
});
