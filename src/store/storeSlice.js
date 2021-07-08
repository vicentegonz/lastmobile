/* eslint-disable no-param-reassign */
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
    storeObjects: {},
  },
  reducers: {
    clear: (state) => {
      state.storeObjects = {};
    },
  },
  extraReducers: {
    [fetchStores.fulfilled]: (state, action) => {
      const data = action.payload;
      state.storeObjects[action.meta.arg] = data;
    },
  },
});

export const { clear } = storeSlice.actions;
export default storeSlice.reducer;
