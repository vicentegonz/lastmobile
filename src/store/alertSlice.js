/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDates from '@/utils/getDates';
import CLIENT from '@/api/client';

export const fetchAlerts = createAsyncThunk(
  'alert/fetchAlerts',
  async (idStore) => {
    try {
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
      );
      return response.data.results[0].data;
    } catch (error) {
      return error;
    }
  },
);

export const fetchNextAlerts = createAsyncThunk(
  'alert/fetchNextAlerts',
  async (input) => {
    try {
      const idStore = input[0];
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/events/`,
      );
      return response.data.results[0].data;
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
    sizePage: 4,
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
      const { today } = getDates();
      const date = today.replace('-', '').replace('-', '');
      const aux = [];
      state.lastNAlerts = [];
      state.pageAlerts = [];
      state.storeAlerts = [];

      Object.keys(data[date]).forEach((key) => {
        const value = data[date][key];
        const object = {
          data: {
            date: today,
            event: value,
          },
          id: key,
          store: action.meta.arg[0],
        };
        aux.push(object);
        state.storeAlerts.push(object);
      });

      state.lastNAlerts = aux.splice(0, 4);
      state.pageAlerts = state.storeAlerts;

      state.totalPages = Math.ceil(state.pageAlerts.length / state.sizePage);
      state.page = 1;
    },
    [fetchAlerts.pending]: (state) => {
      state.picker = true;
    },
    [fetchAlerts.fulfilled]: (state, action) => {
      const data = action.payload;
      const { today } = getDates();
      const date = today.replace('-', '').replace('-', '');

      const aux = [];

      Object.keys(data[date]).forEach((key) => {
        const value = data[date][key];
        const object = {
          data: {
            date: today,
            event: value,
          },
          id: key,
          store: action.meta.arg,
        };
        aux.push(object);
        state.storeAlerts.push(object);
      });

      state.lastNAlerts = aux.splice(0, 4);

      state.pageAlerts = state.storeAlerts;

      state.totalPages = Math.ceil(state.pageAlerts.length / state.sizePage);
      state.page = 1;

      state.status = true;
      state.picker = false;
    },
  },
});

export const { incrementByAmount, clear, setStore } = alertSlice.actions;
export default alertSlice.reducer;
