import { combineReducers } from '@reduxjs/toolkit';

import AppSettings from './slices/appSettings';
import ProductReducer from './slices/exampleSlice';

const rootReducer = combineReducers({
  AppSettings,
  ProductReducer,
});

export default rootReducer;
