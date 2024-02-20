import { RootState } from '../store';

const productReducer = (state: RootState) => state.ProductReducer;
const appSettingReducer = (state: RootState) => state.AppSettings;

export { appSettingReducer, productReducer };
