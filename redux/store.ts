import { configureStore } from '@reduxjs/toolkit';
import getReaderList from './reducer/getReaderList';
import getRecomended from './reducer/getRecomended';
import stateReducer from './reducer/stateReducer';
export const store = configureStore({
  reducer: {
    user: stateReducer,
    recomended: getRecomended,
    fetchReader: getReaderList,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
