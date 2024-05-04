export type AuthMethod =
  | "login"
  | "signup"
  | "forgot-password"
  | "reset-password";



export interface IAuth {
  isLoggedIn: boolean;
  user: IUser | null;
}


