import { IUser } from "./User";

export type AuthMethod =
  | "login"
  | "signup"
  | "forgot-password"
  | "reset-password"
  | "activate";

export interface IAuth {
  isLoggedIn: boolean;
  user: IUser | null;
}
