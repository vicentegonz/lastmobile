/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';

export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (idStore) => {
    try {
      const sizePag = 4;
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
        { params: { size: sizePag } },
      );
      const paginationResponse = {};

      paginationResponse[1] = response.data.results;

      let tengo = response.data.results.length;
      const total = response.data.count;

      let page = 2;

      while (tengo !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${page}`,
          { params: { size: sizePag } },
        );

        paginationResponse[page] = nextResponse.data.results;
        tengo += nextResponse.data.results.length;
        page += 1;
      }

      const auxResponse = {};
      auxResponse.results = response.data.results;
      auxResponse.pagination = paginationResponse;
      auxResponse.count = total;
      auxResponse.sizePag = sizePag;
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
      const sizePag = 4;
      const idStore = input[0];
      const page = input[1];
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/?page=${page}`,
        { params: { size: sizePag } },
      );
      const paginationResponse = {};

      paginationResponse[1] = response.data.results;

      let tengo = response.data.results.length;
      const total = response.data.count;
      let auxPage = 2;

      while (tengo !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${auxPage}`,
          { params: { size: sizePag } },
        );

        paginationResponse[auxPage] = nextResponse.data.results;
        tengo += nextResponse.data.results.length;
        auxPage += 1;
      }

      response.data.sizePag = sizePag;
      response.data.pagination = paginationResponse;
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
    store: undefined,
    picker: false,
  },
  reducers: {
    setStore: (state, action) => {
      state.store = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.page = action.payload;
      state.pageEvents = state.storeEvents[action.payload];
    },
    clear: (state) => {
      state.storeEvents = [];
      state.lastNEvents = [];
      state.status = false;
      state.pageEvents = [];
      state.page = 1;
      state.totalPages = undefined;
      state.store = undefined;
    },
  },
  extraReducers: {
    [fetchNextEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.storeEvents = data.pagination;
      state.pageEvents = data.pagination[1];
      state.totalPages = Math.ceil(data.count / data.sizePag);
      state.page = 1;
    },
    [fetchEvents.pending]: (state) => {
      state.picker = true;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      if (state.pageEvents.length === 0) {
        state.totalPages = Math.ceil(data.count / data.sizePag);
        state.storeEvents = data.pagination;
        state.pageEvents = data.pagination[1];
        state.store = action.meta.arg;
      }
      state.lastNEvents = data.results;
      state.status = true;
      state.picker = false;
    },
  },
});

export const { incrementByAmount, clear, setStore } = eventSlice.actions;
export default eventSlice.reducer;
