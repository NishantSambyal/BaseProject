import { combineReducers } from '@reduxjs/toolkit';

import AppSettings from './slices/appSettings';

const rootReducer = combineReducers({
  AppSettings,
});

export default rootReducer;
