/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    status: false,
  },
  reducers: {
    setValidSession: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setValidSession } = sessionSlice.actions;

export default sessionSlice.reducer;
