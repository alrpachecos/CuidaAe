// supabase.ts (without error)
import 'react-native-url-polyfill/auto';  // Ensures URL polyfill for fetch
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoTrueClient } from '@supabase/gotrue-js';  // Auth client
import { PostgrestClient } from '@supabase/postgrest-js';  // DB client
import Config from 'react-native-config';

// Your Supabase config
const supabaseUrl = Config.SUPABASE_URL;
const supabaseAnonKey = Config.SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase ANON KEY:', supabaseAnonKey);

// Auth client setup
export const auth = new GoTrueClient({
  url: `${supabaseUrl}/auth/v1`,  // Auth endpoint
  autoRefreshToken: true,
  persistSession: true,
  storageKey: 'supabase.auth.token',
  storage: AsyncStorage,
  fetch,  // Use native fetch API for networking
  headers: {
    apikey: supabaseAnonKey as string,
  },
});

// DB client setup (for querying data)
export const db = new PostgrestClient(`${supabaseUrl}/rest/v1`, {
  headers: {
    apikey: supabaseAnonKey as string,
    Authorization: `Bearer ${supabaseAnonKey}`,
  },
  fetch,  // Use native fetch API
});
