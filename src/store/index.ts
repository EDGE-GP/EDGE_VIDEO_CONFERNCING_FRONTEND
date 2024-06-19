import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "@/store/auth/authSlice";
import preloader from "@/store/preloader/preloaderSlice";
import schedule from "@/store/schedule/scheduleSlice";
import notifications from "@/store/notifications/notificationsSlice";
import meeting from "@/store/meeting/meetingSlice";

const rootReducer = combineReducers({
  auth,
  preloader,
  schedule,
  notifications,
  meeting,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
