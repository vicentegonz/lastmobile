/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
// import getDates from '@/utils/getDates';

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (idStore) => {
    try {
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
      );

      const paginationResponse = {};

      paginationResponse[1] = response.data.results;

      let tengo = response.data.results.length;
      const total = response.data.count;

      let page = 2;
      /* eslint-disable no-await-in-loop */
      while (tengo !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${page}`,
        );

        paginationResponse[page] = nextResponse.data.results;
        tengo += nextResponse.data.results.length;
        page += 1;
      }
      /* eslint-enable no-await-in-loop */
      const auxResponse = {};
      auxResponse.results = response.data.results;
      auxResponse.pagination = paginationResponse;
      auxResponse.count = total;
      return auxResponse;
    } catch (error) {
      return error;
    }
  },
);

export const fetchNextEvents = createAsyncThunk(
  'event/fetchNextEvents',
  async (input) => {
    try {
      const idStore = input[0];
      const page = input[1];
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/?page=${page}`,
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
    storeEvents: [],
    lastNEvents: [],
    status: false,
    pageEvents: [],
    page: 1,
    totalPages: undefined,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.page = action.payload;
      state.pageEvents = state.storeEvents[action.payload];
    },
  },
  extraReducers: {
    [fetchNextEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.pageEvents = data.results;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.totalPages = Math.ceil(data.count / 5);
      state.storeEvents = data.pagination;
      /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
      state.pageEvents = data.pagination[1];
      state.lastNEvents = data.results;
      state.status = true;
    },
  },
});

export default eventSlice.reducer;
export const { incrementByAmount } = eventSlice.actions;
