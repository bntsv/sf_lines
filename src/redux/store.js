import { configureStore } from '@reduxjs/toolkit';
import linesReducer from '../features/lines/linesSlice';

export const store = configureStore({
  reducer: {
    lines: linesReducer
  }
});
