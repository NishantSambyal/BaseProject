import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FamilyBookState {
  data: any;
  isLoading: boolean;
  error: string | null;
}
const initialState: FamilyBookState = {
  data: null,
  isLoading: false,
  error: null,
};

// Redux slice
const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: (state: any) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.data = null;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} = ProductSlice.actions;

// Export reducer
export default ProductSlice.reducer;
