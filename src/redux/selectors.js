import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectFavorites = state => state.adverts.favorites;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterValues = state => state.filter.values;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilterValues],
  (adverts, filter) => {
    const { brand, price, mileageFrom, mileageTo } = filter;

    if (brand) {
      adverts = adverts.filter(
        ({ make }) => brand.toLowerCase() === make.toLowerCase()
      );
    }

    if (price) {
      adverts = adverts.filter(
        ({ rentalPrice }) => Number(rentalPrice.split('$')[1]) === Number(price)
      );
    }

    if (mileageFrom) {
      adverts = adverts.filter(
        ({ mileage }) => Number(mileage) >= Number(mileageFrom)
      );
    }

    if (mileageTo) {
      adverts = adverts.filter(
        ({ mileage }) => Number(mileage) <= Number(mileageTo)
      );
    }

    return adverts;
  }
);
