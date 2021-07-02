/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
// import getDates from '@/utils/getDates';

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
      /* eslint-disable no-await-in-loop */
      while (tengo !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${page}`,
          { params: { size: sizePag } },
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
      /* eslint-disable no-await-in-loop */
      while (tengo !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${auxPage}`,
          { params: { size: sizePag } },
        );

        paginationResponse[auxPage] = nextResponse.data.results;
        tengo += nextResponse.data.results.length;
        auxPage += 1;
      }
      /* eslint-enable no-await-in-loop */
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
      state.status = false;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      const data = action.payload;
      if (state.pageEvents.length === 0) {
        state.totalPages = Math.ceil(data.count / data.sizePag);
        state.storeEvents = data.pagination;
        /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
        state.pageEvents = data.pagination[1];
        state.store = action.meta.arg;
      }
      state.lastNEvents = data.results;
      state.status = true;
    },
  },
});

export const { incrementByAmount, clear, setStore } = eventSlice.actions;
export default eventSlice.reducer;
