import { createSelector } from '@reduxjs/toolkit';
import { productReducer } from '.';

export const myProducts = createSelector(productReducer, state => {
  return state.data;
});
