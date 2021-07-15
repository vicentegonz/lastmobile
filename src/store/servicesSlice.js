/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
import getDates from '@/utils/getDates';
import processSI from '@/utils/processSI';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (idStore) => {
    try {
      const { today } = getDates();
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/service-indicators/`,
        { params: { date: today, size: 8 } },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    storeServices: [],
    mainService: {},
    npsService: {},
    status: false,
    picker: false,
  },
  reducers: {
    clear: (state) => {
      state.storeServices = [];
      state.mainService = {};
      state.npsService = {};
      state.status = false;
    },
  },
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.picker = true;
    },
    [fetchServices.fulfilled]: (state, action) => {
      const data = action.payload.results;

      const { mainService, aux, npsService } = processSI(data);

      state.mainService = mainService;
      state.npsService = npsService;
      state.storeServices = aux;
      state.status = true;
      state.picker = false;
    },
  },
});

export const { clear } = servicesSlice.actions;
export default servicesSlice.reducer;
