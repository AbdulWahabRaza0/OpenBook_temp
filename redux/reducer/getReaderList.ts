import { client } from '@/service/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fecthReadingList } from '../middleware/fetchReadingList';

type IntialState = {
  loading?: boolean;
  error?: string;
  readerList?: any[];
};
const initialState: IntialState = {
  loading: false,
  error: '',
  readerList: [],
};

const readerListSlice: any = createSlice({
  name: 'readerfetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthReadingList.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(
      fecthReadingList.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.loading = false;

        state.readerList = action.payload;
      }
    );
  },
});
export default readerListSlice.reducer;
