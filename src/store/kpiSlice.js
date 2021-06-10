/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
// import getDates from '@/utils/getDates';

export const fetchKPIs = createAsyncThunk('kpi/fetchKPIs', async (idStore) => {
  try {
    const response = await CLIENT.get(`/v1/operations/stores/${idStore}/kpis/`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const kpiSlice = createSlice({
  name: 'kpi',
  initialState: {
    storeKpis: [],
  },
  reducers: {},
  extraReducers: {
    [fetchKPIs.fulfilled]: (state, action) => {
      const data = action.payload;
      // const { today, yesterday, lastWeek } = getDates();

      // Dates hardcoded because there is no real data yet, just seeds.
      const today = '2021-06-17';
      const yesterday = '2021-06-16';
      const lastWeek = '2021-06-10';

      const todayKPI = [];
      const yesterdayKPI = [];
      const lastWeekKPI = [];

      data.map((kpi) => {
        if (today === kpi.date) {
          todayKPI.push(kpi);
        } else if (yesterday === kpi.date) {
          yesterdayKPI.push(kpi);
        } else if (lastWeek === kpi.date) {
          lastWeekKPI.push(kpi);
        }
        return undefined;
      });
      const aux = [];
      for (let i = 0; i < todayKPI.length; i += 1) {
        const obj = {
          id: i,
          name: todayKPI[i].name,
          store: todayKPI[i].store,
          value: todayKPI[i].value,
          differnceYesterday: todayKPI[i].value - yesterdayKPI[i].value,
          differnceLastWeek: todayKPI[i].value - lastWeekKPI[i].value,
        };

        aux.push(obj);
      }
      state.storeKpis = aux;
    },
  },
});

export default kpiSlice.reducer;
