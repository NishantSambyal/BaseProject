import { createSelector } from '@reduxjs/toolkit';
import { productReducer } from './index';

export const myProducts = createSelector(productReducer, state => {
  return state.data;
});
