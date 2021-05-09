/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: null,
  },
  reducers: {
    error: (state) => {
      state.status = false;
    },
    success: (state) => {
      state.status = true;
    },
    logout: (state) => {
      state.status = null;
    },
  },
});

export const { error, success, logout } = userSlice.actions;
export default userSlice.reducer;
