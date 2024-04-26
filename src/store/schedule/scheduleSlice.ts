import { createSlice } from "@reduxjs/toolkit";
import { ActivityFlagEnum, IMeetingSchedule } from "../../types/Meeting";
import { format, setDate } from "date-fns";
import { IUser } from "../../types/Auth";

const initialState: IMeetingSchedule = {
  title: "",
  description: "",
  activityFlag: ActivityFlagEnum["#7986CB"],
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
    toggleEnableInterpreter: (state) => {
      state.enableInterpreter = !state.enableInterpreter;
    },
    toggleEnableAvatar: (state) => {
      state.enableAvatar = !state.enableAvatar;
    },
    setActivityFlag: (
      state,
      action: {
        payload: ActivityFlagEnum;
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
  },
});
export const scheduleActions = scheduleSlice.actions;

export default scheduleSlice.reducer;
