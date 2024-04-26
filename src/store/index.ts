import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import preloader from "./preloader/preloaderSlice";
import schedule from "./schedule/scheduleSlice";
const rootReducer = combineReducers({
  auth,
  preloader,
  schedule,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
