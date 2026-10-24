export interface LoginInput {
  mobile: string;
  aadhar: string;
  password: string;
}

export interface RegisterInput extends LoginInput {
  name: string;
  confirmPassword: string;
}

export type AuthMode = "demo" | "backend";

export interface AuthResult {
  ok: boolean;
  mode: AuthMode;
  error?: string;
}
