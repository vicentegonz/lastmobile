/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';

export const fetchAlerts = createAsyncThunk(
  'alert/fetchAlerts',
  async (idStore) => {
    try {
      const sizePag = 4;
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
        { params: { size: sizePag } },
      );
      const paginationResponse = {};

      paginationResponse[1] = response.data.results;

      let current = response.data.results.length;
      const total = response.data.count;

      let page = 2;

      while (current !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${page}`,
          { params: { size: sizePag } },
        );

        paginationResponse[page] = nextResponse.data.results;
        current += nextResponse.data.results.length;
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

export const fetchNextAlerts = createAsyncThunk(
  'alert/fetchNextAlerts',
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

      let current = response.data.results.length;
      const total = response.data.count;
      let auxPage = 2;

      while (current !== total) {
        const nextResponse = await CLIENT.get(
          `/v1/operations/stores/${idStore}/events/?page=${auxPage}`,
          { params: { size: sizePag } },
        );

        paginationResponse[auxPage] = nextResponse.data.results;
        current += nextResponse.data.results.length;
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

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    storeAlerts: [],
    lastNAlerts: [],
    status: false,
    pageAlerts: [],
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
      state.pageAlerts = state.storeAlerts[action.payload];
    },
    clear: (state) => {
      state.storeAlerts = [];
      state.lastNAlerts = [];
      state.status = false;
      state.pageAlerts = [];
      state.page = 1;
      state.totalPages = undefined;
      state.store = undefined;
    },
  },
  extraReducers: {
    [fetchNextAlerts.fulfilled]: (state, action) => {
      const data = action.payload;
      state.storeAlerts = data.pagination;
      state.pageAlerts = data.pagination[1];
      state.totalPages = Math.ceil(data.count / data.sizePag);
      state.page = 1;
    },
    [fetchAlerts.pending]: (state) => {
      state.picker = true;
    },
    [fetchAlerts.fulfilled]: (state, action) => {
      const data = action.payload;
      if (state.pageAlerts.length === 0) {
        state.totalPages = Math.ceil(data.count / data.sizePag);
        state.storeAlerts = data.pagination;
        state.pageAlerts = data.pagination[1];
        state.store = action.meta.arg;
      }
      state.lastNAlerts = data.results;
      state.status = true;
      state.picker = false;
    },
  },
});

export const { incrementByAmount, clear, setStore } = alertSlice.actions;
export default alertSlice.reducer;
