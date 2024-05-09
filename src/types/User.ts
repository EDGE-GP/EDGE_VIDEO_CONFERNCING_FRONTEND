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

export interface INotification {
  id: string;
  type:
    | "meetingInvitation"
    | "meetingReminder"
    | "meetingUpdated"
    | "meetingCanceled"
    | "friendshipRequest"
    | "friendshipAccepted"
    | "friendshipRejected";
  message: string;
  read: boolean;
  user: IUser;
  createdAt: string;
}
