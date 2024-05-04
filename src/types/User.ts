export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string | null;
}

export interface IFriendship {
  id: string;
  status: "pending" | "accepted" | "rejected" | "deleted";
  user: IUser;
}
