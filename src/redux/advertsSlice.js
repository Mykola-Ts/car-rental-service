import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { fetchAdverts } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    addAdvertToFavorite: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteAdvertFromFavorite: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          ({ id }) => id !== action.payload
        );
      },
    },
  },
});

const persistConfig = {
  key: 'advertState',
  storage,
  whitelist: ['favorites'],
};

export const advertsReducer = persistReducer(
  persistConfig,
  advertsSlice.reducer
);

export const { addAdvertToFavorite, deleteAdvertFromFavorite } =
  advertsSlice.actions;
