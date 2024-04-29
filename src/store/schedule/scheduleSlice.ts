import { createSlice } from "@reduxjs/toolkit";
import { ActivityFlagEnum, IMeetingSchedule } from "@/types/Meeting";
import { format } from "date-fns";
import { IUser } from "@/types/Auth";

const initialState: IMeetingSchedule = {
  title: "",
  description: "",
  activityFlag: "#7986CB",
  enableAvatar: false,
  enableInterpreter: false,
  language: "Arabic",
  participants: [],
  saveConversation: false,
  startTime: `${format(new Date(), "yyyy-MM-dd")}T${format(
    new Date(),
    "HH:mm"
  )}:00.000Z`,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setTitle: (
      state,
      action: {
        payload: string;
      }
    ) => {
      state.title = action.payload;
    },
    setDescripiton: (
      state,
      action: {
        payload: string;
      }
    ) => {
      state.description = action.payload;
    },
    toggleSaveConversation: (state) => {
      state.saveConversation = !state.saveConversation;
    },
    toggleEnableInterpreter: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.enableInterpreter = action.payload;
    },
    toggleEnableAvatar: (state) => {
      state.enableAvatar = !state.enableAvatar;
    },
    setActivityFlag: (
      state,
      action: {
        payload:
          | "#7986CB"
          | "#8E24AA"
          | "#616161"
          | "#039BE5"
          | "#33B679"
          | "#E67C73"
          | "#F4511E";
      }
    ) => {
      state.activityFlag = action.payload;
    },
    setDate: (
      state,
      action: {
        payload: string;
      }
    ) => {
      state.startTime = action.payload;
    },
    setLanguage: (
      state,
      action: {
        payload: "Arabic" | "English";
      }
    ) => {
      state.language = action.payload;
    },
    addMeetingParticipant: (
      state,
      action: {
        payload: IUser;
      }
    ) => {
      const isParticipant = state.participants.some(
        (participant) => participant.id === action.payload.id
      );
      if (isParticipant) return;

      state.participants.push(action.payload);
    },
    removeMeetingParticipant: (
      state,
      action: {
        payload: string;
      }
    ) => {
      console.log(action.payload);

      state.participants = state.participants.filter(
        (participant) => participant.id !== action.payload
      );
    },
    emptyInput: (state) => {
      state.activityFlag = "#7986CB";
      state.description = "";
      state.enableAvatar = false;
      state.enableInterpreter = false;
      state.saveConversation = false;
      state.language = "Arabic";
      state.participants = [];
      state.title = "";
      state.startTime = `${format(new Date(), "yyyy-MM-dd")}T${format(
        new Date(),
        "HH:mm"
      )}:00.000Z`;
    },
  },
});
export const scheduleActions = scheduleSlice.actions;

export default scheduleSlice.reducer;
