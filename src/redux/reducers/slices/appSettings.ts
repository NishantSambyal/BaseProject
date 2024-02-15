import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  language?: string | 'en' | 'ar';
  isFirstOpen: boolean;
}
const initialState: UserState = {
  isFirstOpen: false,
  language: 'en',
};

// Redux slice
const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    selectLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setIsFirstOpen: (state, action: PayloadAction<boolean>) => {
      state.isFirstOpen = action.payload;
    },
    resetAppSettings: () => initialState,
  },
});

export const {selectLanguage, setIsFirstOpen, resetAppSettings} =
  appSettings.actions;

// Export reducer
export default appSettings.reducer;
