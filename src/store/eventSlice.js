/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (idStore) => {
    try {
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    storeEvents: {},
    lastEvent: undefined,
    lastNEvents: [],
    page: 1,
  },
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.lastNEvents = data.results;
      state.storeEvents[action.meta.arg] = data.results;
    },
  },
});

export default eventSlice.reducer;
