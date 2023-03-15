import { client } from '@/service/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fecthRecomended } from '../middleware/fetchRecomended';

type IntialState = {
  loading?: boolean;
  error?: string;

  recomendedData?: any[];
};
const initialState: IntialState = {
  loading: false,
  error: '',
  recomendedData: [],
};

const recomendSlice: any = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthRecomended.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fecthRecomended.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.loading = false;

        state.recomendedData = action.payload;
      }
    );
  },
});
export default recomendSlice.reducer;
