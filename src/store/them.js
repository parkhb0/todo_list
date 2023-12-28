import { configureStore, createSlice } from "@reduxjs/toolkit";

let isDarkMode = createSlice({
  name: "isDarkMode",
  initialState: false,
  reducers: {
    changeDarkMode(state) {
      if (state == true) {
        return false;
      } else {
        return true;
      }
    },
  },
});

export const { changeDarkMode } = isDarkMode.actions;

export default configureStore({
  reducer: {
    them: isDarkMode.reducer,
  },
});
