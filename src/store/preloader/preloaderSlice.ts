import { createSlice } from "@reduxjs/toolkit";

interface IPreloader {
  preloader: boolean;
}

const initialState: IPreloader = {
  preloader: true,
};

const preloaderSlice = createSlice({
  name: "preloader",
  initialState,
  reducers: {
    setPreloader: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.preloader = action.payload;
    },
  },
});
export const preloaderActions = preloaderSlice.actions;

export default preloaderSlice.reducer;
