import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    values: { brand: '', price: null, mileageFrom: null, mileageTo: null },
  },
  reducers: {
    filterAdverts: {
      reducer(state, action) {
        state.values = { ...state.values, ...action.payload };
      },
    },
  },
});

export const { filterAdverts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
