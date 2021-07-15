/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    status: false,
    loginValue: '',
  },
  reducers: {
    setValidSession: (state, action) => {
      state.status = action.payload;
    },
    setLoginValue: (state, action) => {
      state.loginValue = action.payload;
    },
    clear: (state) => {
      state.status = false;
      state.loginValue = '';
    },
  },
});

export const { setValidSession, clear, setLoginValue } = sessionSlice.actions;

export default sessionSlice.reducer;
