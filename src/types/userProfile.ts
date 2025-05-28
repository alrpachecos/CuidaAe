export interface UserProfile {
  id: string;
  full_name: string;
  role: 'patient' | 'professional';
  avatar_url?: string;
}
