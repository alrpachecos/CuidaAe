export interface User {
  id: string;
  email: string;
  name?: string;
  photoURL?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends SignInCredentials {
  name?: string;
} 