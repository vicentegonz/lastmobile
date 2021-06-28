/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
import getDates from '@/utils/getDates';
import { processStoreKpis, processMainKpis } from '@/utils/processKpis';

export const fetchKPIs = createAsyncThunk('kpi/fetchKPIs', async (idStore) => {
  try {
    const { today } = getDates();

    const response = await CLIENT.get(
      `/v1/operations/stores/${idStore}/kpis/`,
      { params: { date: today, size: 15 } },
    );
    const auxResponse = response.data.results;
    const total = response.data.count;

    let page = 2;
    while (auxResponse.length !== total) {
      const nextResponse = await CLIENT.get(
        `/v1/operations/stores/${idStore}/kpis/`,
        { params: { date: today, size: 15, page } },
      );
      nextResponse.data.results.map((kpi) => {
        auxResponse.push(kpi);
        return null;
      });

      page += 1;
    }
    return auxResponse;
  } catch (error) {
    return error;
  }
});

export const kpiSlice = createSlice({
  name: 'kpi',
  initialState: {
    storeKpis: {},
    status: false,
    mainKPIs: [],
  },
  reducers: {
    clear: (state) => {
      state.storeKpis = {};
      state.status = false;
      state.mainKPIs = [];
    },
  },
  extraReducers: {
    [fetchKPIs.pending]: (state) => {
      state.status = false;
    },
    [fetchKPIs.fulfilled]: (state, action) => {
      const data = action.payload;

      const { today, yesterday, lastWeek } = getDates();

      const kpiT = [];
      const kpiY = [];
      const kpiLW = [];

      data.map((kpi) => {
        if (today === kpi.date) {
          kpiT.push(kpi);
        } else if (yesterday === kpi.date) {
          kpiY.push(kpi);
        } else if (lastWeek === kpi.date) {
          kpiLW.push(kpi);
        }
        return undefined;
      });

      state.storeKpis = processStoreKpis(kpiT, kpiY, kpiLW);
      state.mainKPIs = processMainKpis(kpiT, kpiY, kpiLW);
      state.status = true;
    },
  },
});

export const { clear } = kpiSlice.actions;
export default kpiSlice.reducer;
