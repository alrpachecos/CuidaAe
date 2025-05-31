import {auth} from '../lib/supabase';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export const authService = {
  async signUp({name, email, password}: SignUpData) {
    const {data, error} = await auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) throw error;
    return data;
  },

  async signIn({email, password}: SignInData) {
    const {data, error} = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  async signOut() {
    const {error} = await auth.signOut();
    if (error) throw error;
  },

  async resetPassword(email: string) {
    const {error} = await auth.resetPasswordForEmail(email, {
      redirectTo: 'cuidaae://reset-password',
    });

    if (error) throw error;
  },

  async updatePassword(newPassword: string) {
    const {error} = await auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  },
}; 