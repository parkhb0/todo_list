import { configureStore, createSlice } from "@reduxjs/toolkit";

let isDarkMode = createSlice({
  name: "isDarkMode",
  initialState: false,
  reducers: {
    toggleDarkMode(state) {
      if (state == true) {
        return false;
      } else {
        return true;
      }
    },
  },
});

export const { toggleDarkMode } = isDarkMode.actions;

export default configureStore({
  reducer: {
    isDarkMode: isDarkMode.reducer,
  },
});
