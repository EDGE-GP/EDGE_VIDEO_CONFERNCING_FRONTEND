import { IMeeting } from "@/types/Meeting";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  meeting: IMeeting | null;
  passwordRequirement: boolean;
} = {
  meeting: null,
  passwordRequirement: false,
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setMeeting: (
      state,
      action: {
        payload: IMeeting;
      }
    ) => {
      state.meeting = action.payload;
    },
    setPasswordRequirement: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.passwordRequirement = action.payload;
    },
    leaveMeeting: (state) => {
      state.meeting = null;
    },
  },
});
export const meetingActions = meetingSlice.actions;

export default meetingSlice.reducer;
