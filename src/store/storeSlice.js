/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';

export const fetchStores = createAsyncThunk(
  'store/fetchStores',
  async (idStore) => {
    try {
      const response = await CLIENT.get(`/v1/operations/stores/${idStore}/`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    address: null,
    zone: null,
  },
  reducers: {},
  extraReducers: {
    [fetchStores.fulfilled]: (state, action) => {
      const data = action.payload;
      state.address = data.address;
      state.zone = data.zone;
    },
  },
});

export default storeSlice.reducer;
