export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  bio?: string;
  location?: string;
  notifyEmail?: boolean;
  remindersViaEmail?: boolean;
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
    | "meetingInvitationAccepted"
    | "meetingInvitationRejected"
    | "friendshipRequest"
    | "friendshipAccepted";
  message: string;
  read: boolean;
  user: IUser;
  badge: string | null;
  createdAt: string;
}
