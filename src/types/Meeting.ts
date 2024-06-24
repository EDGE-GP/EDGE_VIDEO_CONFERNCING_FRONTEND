import { IUser } from "@/types/User";

export interface IMeeting {
  title: string;
  description: string;
  participants: IUser[];
  language: "English" | "Arabic";
  id: string;
  activityFlag: string;
  conferenceId: string;
  startTime: string;
  saveConversation: boolean;
  enableInterpreter: boolean;
  enableAvatar: boolean;
  organizerId: string;
  password: string;
  includeConversation: boolean;
  privacyStatus: "private" | "public";
}
export interface IMeetingSchedule {
  title: string;
  description: string;
  participants: IUser[];
  language: "English" | "Arabic";
  privacyStatus: "private" | "public";
  activityFlag:
    | "#7986CB"
    | "#8E24AA"
    | "#616161"
    | "#039BE5"
    | "#33B679"
    | "#E67C73"
    | "#F4511E";
  startTime: string;
  saveConversation: boolean;
  enableInterpreter: boolean;
  enableAvatar: boolean;
}

export interface IMeetingInvitation {
  id: string;
  meeting: IMeeting;
  status: "pending" | "accepted" | "rejected";
}
export interface IMessage {
  id: string;
  content: string;
  senderId: string;
  isInterpreted: boolean;
  createdAt: Date;
  updatedAt: Date;
  meetingId: string;
  sender: IUser;
}
export interface IMessageGroup {
  sender: IUser;
  messages: IMessage[];
}
