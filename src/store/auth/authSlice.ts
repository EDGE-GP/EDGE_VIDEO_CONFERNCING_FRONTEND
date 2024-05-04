import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IUser } from "@/types/User";

const initialState: IAuth = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: {
        payload: { user: IUser };
      }
    ) => {
      console.log({
        user: action.payload.user,
      });
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
