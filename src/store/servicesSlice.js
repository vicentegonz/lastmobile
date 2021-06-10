import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
// import getDates from '@/utils/getDates';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (idStore) => {
    try {
      const response = await CLIENT.get(
        `/v1/operations/stores/${idStore}/service-indicators/`,
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
  },
  reducers: {},
  extraReducers: {
    [fetchServices.fulfilled]: (state, action) => {
      const data = action.payload;
      // const { today, yesterday, lastWeek } = getDates();

      const today = '2021-06-17';
      const yesterday = '2021-06-16';
      const lastWeek = '2021-06-10';

      const indicatorT = [];
      const indicatorY = [];
      const indicatorLW = [];

      data.map((kpi) => {
        if (today === kpi.date) {
          indicatorT.push(kpi);
        } else if (yesterday === kpi.date) {
          indicatorY.push(kpi);
        } else if (lastWeek === kpi.date) {
          indicatorLW.push(kpi);
        }
        return undefined;
      });
      for (let i = 0; i < 7; i += 1) {
        const obj = {
          id: i,
          name: indicatorT[i].name,
          store: indicatorT[i].store,
          value: indicatorT[i].value,
          variationY: indicatorT[i].value - indicatorY[i].value + 1,
          variationLW: indicatorT[i].value - indicatorLW[i].value - 1,
        };
        state.storeServices.push(obj);
      }
    },
  },
});

export default servicesSlice.reducer;
