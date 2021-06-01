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
    last3Events: [
      // Need endpoint for last n events.
      {
        createdAt: '2020-10-20T10:30:00.998000Z',
        data: {
          date: '2020-10-20T10:30:00.998Z',
          event: 'An estimated 10 diet cokes will be consumed today',
        },
        id: 1,
        store: 2,
      },
      {
        createdAt: '2020-10-20T10:30:00.998000Z',
        data: {
          date: '2020-10-20T10:30:00.998Z',
          event: 'An estimated 20 diet cokes will be consumed today',
        },
        id: 2,
        store: 2,
      },
      {
        createdAt: '2020-10-20T10:30:00.998000Z',
        data: {
          date: '2020-10-20T10:30:00.998Z',
          event: 'An estimated 30 diet cokes will be consumed today',
        },
        id: 3,
        store: 2,
      },
      {
        createdAt: '2020-10-20T10:30:00.998000Z',
        data: {
          date: '2020-10-20T10:30:00.998Z',
          event: 'An estimated 40 diet cokes will be consumed today',
        },
        id: 4,
        store: 2,
      },
    ],
  },
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.storeEvents[action.meta.arg] = data;
      data.map((event) => {
        state.lastEvent = event;
        return null;
      });
    },
  },
});

export default eventSlice.reducer;
