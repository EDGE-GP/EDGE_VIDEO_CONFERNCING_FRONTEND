import { createSlice } from "@reduxjs/toolkit";
import { INotification } from "@/types/User";

const initialState: {
  notifications: INotification[];
  panner: number;
  isNotificationsFetching: boolean;
} = {
  notifications: [],
  panner: 0,
  isNotificationsFetching: true,
};
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (
      state,
      action: {
        payload: { notifications: INotification[] };
      }
    ) => {
      state.notifications = action.payload.notifications;
    },
    pushNotification: (
      state,
      action: {
        payload: { notification: INotification };
      }
    ) => {
      state.notifications.push(action.payload.notification);
      state.panner = state.panner + 1;
    },
    setNotificationPanner: (
      state,
      action: {
        payload: number;
      }
    ) => {
      state.panner = action.payload;
    },
    setIsNotificationFetching: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.isNotificationsFetching = action.payload;
    },
  },
});
export const notificationsActions = notificationSlice.actions;

export default notificationSlice.reducer;
