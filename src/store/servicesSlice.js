/* eslint-disable object-curly-newline */
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
  reducers: {
    clear: (state) => {
      state.storeServices = [];
      state.mainService = {};
      state.status = false;
    },
  },
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.status = false;
    },
    [fetchServices.fulfilled]: (state, action) => {
      const data = action.payload;
      const { today, yesterday, date2, date3, date4, date5, date6, lastWeek } = getDates();

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

      data.map((servicios) => {
        if (today === servicios.date) {
          indicatorT[servicios.name] = servicios;
        } else if (yesterday === servicios.date) {
          indicatorY[servicios.name] = servicios;
        } else if (date2 === servicios.date) {
          indicatord2[servicios.name] = servicios;
          s2 += servicios.value * servicios.amountOfSurveys;
          p2 += servicios.amountOfSurveys;
        } else if (date3 === servicios.date) {
          indicatord3[servicios.name] = servicios;
          s3 += servicios.value * servicios.amountOfSurveys;
          p3 += servicios.amountOfSurveys;
        } else if (date4 === servicios.date) {
          indicatord4[servicios.name] = servicios;
          s4 += servicios.value * servicios.amountOfSurveys;
          p4 += servicios.amountOfSurveys;
        } else if (date5 === servicios.date) {
          indicatord5[servicios.name] = servicios;
          s5 += servicios.value * servicios.amountOfSurveys;
          p5 += servicios.amountOfSurveys;
        } else if (date6 === servicios.date) {
          indicatord6[servicios.name] = servicios;
          s6 += servicios.value * servicios.amountOfSurveys;
          p6 += servicios.amountOfSurveys;
        } else if (lastWeek === servicios.date) {
          indicatorLW[servicios.name] = servicios;
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

      Object.entries(indicatorT).forEach(([nameKey, servicios]) => {
        ponderadosT += servicios.value * servicios.amountOfSurveys;
        surveysT += servicios.amountOfSurveys;

        ponderadosY
          += indicatorY[nameKey].value * indicatorY[nameKey].amountOfSurveys;
        surveysY += indicatorY[nameKey].amountOfSurveys;

        ponderadosLW
          += indicatorLW[nameKey].value * indicatorLW[nameKey].amountOfSurveys;
        surveysLW += indicatorLW[nameKey].amountOfSurveys;

        const obj = {
          id: servicios.id,
          name: nameKey,
          store: servicios.store,
          value: round(servicios.value, 2),
          data: {
            v1: round(indicatorLW[nameKey].value, 2),
            v2: round(indicatord6[nameKey].value, 2),
            v3: round(indicatord5[nameKey].value, 2),
            v4: round(indicatord4[nameKey].value, 2),
            v5: round(indicatord3[nameKey].value, 2),
            v6: round(indicatord2[nameKey].value, 2),
            v7: round(indicatorY[nameKey].value, 2),
            v8: round(indicatorT[nameKey].value, 2),
          },
          variationYNumber: indicatorY[nameKey].value - servicios.value,
          variationLWNumber: indicatorLW[nameKey].value - servicios.value,
          variationYpercentage:
            ((indicatorY[nameKey].value - servicios.value)
              / indicatorY[nameKey].value)
            * 100,

          variationLWpercentage:
            ((indicatorLW[nameKey].value - servicios.value)
              / indicatorLW[nameKey].value)
            * 100,
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
        value: round(mainServiceT, 2),
        data: {
          v1: round(mainServiceLW, 2),
          v2: round(mainServiced6, 2),
          v3: round(mainServiced5, 2),
          v4: round(mainServiced4, 2),
          v5: round(mainServiced3, 2),
          v6: round(mainServiced2, 2),
          v7: round(mainServiceY, 2),
          v8: round(mainServiceT, 2),
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

export const { clear } = servicesSlice.actions;
export default servicesSlice.reducer;
