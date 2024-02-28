export type AuthMethod =
  | "login"
  | "signup"
  | "forgot-password"
  | "reset-password";

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
}

export interface IAuth {
  isLoggedIn: boolean;
  user: IUser | null;
}
