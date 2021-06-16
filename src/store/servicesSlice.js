/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';
import getDates from '@/utils/getDates';
import { round1 } from '@/utils/round';

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
      const { today, yesterday, date2, date3, date4, date5, date6, lastWeek } =
        getDates();

      const indicatorT = {};
      const indicatorY = {};
      const indicatord2 = {};
      const indicatord3 = {};
      const indicatord4 = {};
      const indicatord5 = {};
      const indicatord6 = {};
      const indicatorLW = {};

      let s2 = 0;
      let p2 = 0;
      let s3 = 0;
      let p3 = 0;
      let s4 = 0;
      let p4 = 0;
      let s5 = 0;
      let p5 = 0;
      let s6 = 0;
      let p6 = 0;

      data.map((kpi) => {
        if (today === kpi.date) {
          indicatorT[kpi.name] = kpi;
        } else if (yesterday === kpi.date) {
          indicatorY[kpi.name] = kpi;
        } else if (date2 === kpi.date) {
          indicatord2[kpi.name] = kpi;
          s2 += kpi.value * kpi.amountOfSurveys;
          p2 += kpi.amountOfSurveys;
        } else if (date3 === kpi.date) {
          indicatord3[kpi.name] = kpi;
          s3 += kpi.value * kpi.amountOfSurveys;
          p3 += kpi.amountOfSurveys;
        } else if (date4 === kpi.date) {
          indicatord4[kpi.name] = kpi;
          s4 += kpi.value * kpi.amountOfSurveys;
          p4 += kpi.amountOfSurveys;
        } else if (date5 === kpi.date) {
          indicatord5[kpi.name] = kpi;
          s5 += kpi.value * kpi.amountOfSurveys;
          p5 += kpi.amountOfSurveys;
        } else if (date6 === kpi.date) {
          indicatord6[kpi.name] = kpi;
          s6 += kpi.value * kpi.amountOfSurveys;
          p6 += kpi.amountOfSurveys;
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
          value: kpi.value.toFixed(1).replace('.', ','),
          data: {
            v1: round1(indicatorLW[nameKey].value, 1, true),
            v2: round1(indicatord6[nameKey].value, 1, true),
            v3: round1(indicatord5[nameKey].value, 1, true),
            v4: round1(indicatord4[nameKey].value, 1, true),
            v5: round1(indicatord3[nameKey].value, 1, true),
            v6: round1(indicatord2[nameKey].value, 1, true),
            v7: round1(indicatorY[nameKey].value, 1, true),
            v8: round1(indicatorT[nameKey].value, 1, true),
          },
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
      const mainServiced2 = s2 / p2;
      const mainServiced3 = s3 / p3;
      const mainServiced4 = s4 / p4;
      const mainServiced5 = s5 / p5;
      const mainServiced6 = s6 / p6;

      const mainService = {
        name: 'Nota Final',
        id: 'mainService',
        value: round1(mainServiceT, 1, true),
        data: {
          v1: round1(mainServiceLW, 2, true),
          v2: round1(mainServiced6, 2, true),
          v3: round1(mainServiced5, 2, true),
          v4: round1(mainServiced4, 2, true),
          v5: round1(mainServiced3, 2, true),
          v6: round1(mainServiced2, 2, true),
          v7: round1(mainServiceY, 2, true),
          v8: round1(mainServiceT, 2, true),
        },
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
