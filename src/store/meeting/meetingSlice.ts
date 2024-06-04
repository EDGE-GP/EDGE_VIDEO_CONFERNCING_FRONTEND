import { IMeeting } from "@/types/Meeting";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  meeting: IMeeting | null;
} = {
  meeting: null,
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
    leaveMeeting: (state) => {
      state.meeting = null;
    },
  },
});
export const meetingActions = meetingSlice.actions;

export default meetingSlice.reducer;
