/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
import getDates from '@/utils/getDates';
import round from '@/utils/round';

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
    mainService: {},
    status: false,
  },
  reducers: {},
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.status = false;
    },
    [fetchServices.fulfilled]: (state, action) => {
      const data = action.payload;
      const { today, yesterday, lastWeek } = getDates();

      const indicatorT = {};
      const indicatorY = {};
      const indicatorLW = {};

      data.map((kpi) => {
        if (today === kpi.date) {
          indicatorT[kpi.name] = kpi;
        } else if (yesterday === kpi.date) {
          indicatorY[kpi.name] = kpi;
        } else if (lastWeek === kpi.date) {
          indicatorLW[kpi.name] = kpi;
        }
        return undefined;
      });
      const aux = [];

      let ponderadosT = 0;
      let surveysT = 0;

      let ponderadosY = 0;
      let surveysY = 0;

      let ponderadosLW = 0;
      let surveysLW = 0;

      Object.entries(indicatorT).forEach(([nameKey, kpi]) => {
        ponderadosT += kpi.value * kpi.amountOfSurveys;
        surveysT += kpi.amountOfSurveys;

        ponderadosY +=
          indicatorY[nameKey].value * indicatorY[nameKey].amountOfSurveys;
        surveysY += indicatorY[nameKey].amountOfSurveys;

        ponderadosLW +=
          indicatorLW[nameKey].value * indicatorLW[nameKey].amountOfSurveys;
        surveysLW += indicatorLW[nameKey].amountOfSurveys;

        const obj = {
          id: kpi.id,
          name: nameKey,
          store: kpi.store,
          value: round(kpi.value, true),
          variationYNumber: indicatorY[nameKey].value - kpi.value,
          variationLWNumber: indicatorLW[nameKey].value - kpi.value,
          variationYpercentage:
            ((indicatorY[nameKey].value - kpi.value) /
              indicatorY[nameKey].value) *
            100,

          variationLWpercentage:
            ((indicatorLW[nameKey].value - kpi.value) /
              indicatorLW[nameKey].value) *
            100,
        };
        aux.push(obj);
      });

      const mainServiceT = ponderadosT / surveysT;
      const mainServiceY = ponderadosY / surveysY;
      const mainServiceLW = ponderadosLW / surveysLW;

      const mainService = {
        name: 'Nota Final',
        id: 'mainService',
        value: round(mainServiceT, true),
        variationYNumber: mainServiceY - mainServiceT,
        variationLWNumber: mainServiceLW - mainServiceT,
        variationYpercentage:
          ((mainServiceY - mainServiceT) / mainServiceY) * 100,
        variationLWpercentage:
          ((mainServiceLW - mainServiceT) / mainServiceLW) * 100,
      };

      state.mainService = mainService;

      state.storeServices = aux;
      state.status = true;
    },
  },
});

export default servicesSlice.reducer;
