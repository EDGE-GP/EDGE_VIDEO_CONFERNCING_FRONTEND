import { IUser } from "@/types/Auth";

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
}
export interface IMeetingSchedule {
  title: string;
  description: string;
  participants: IUser[];
  language: "English" | "Arabic";
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
