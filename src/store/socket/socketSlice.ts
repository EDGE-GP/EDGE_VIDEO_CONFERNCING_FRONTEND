import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

const initialState: {
  socket: Socket | null;
} = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (
      state,
      action: {
        payload: {
          socket: Socket;
        };
      }
    ) => {
      state.socket = action.payload.socket;
    },
    removeSocket(state) {
      state.socket = null;
    },
  },
});
export const socketActions = socketSlice.actions;

export default socketSlice.reducer;
