
export type AuthMode = 'login' | 'register'

export interface LoginSchema {
  isLoading: boolean;
  username: string;
  password: string;
  error?: string | null
  mode?: AuthMode
}