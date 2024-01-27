import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lines: require('../../api/db/data.json'),
  selectedLine: null
};

const linesSlice = createSlice({
  name: 'lines',
  initialState,
  reducers: {
    selectLine: (state, action) => {
      state.selectedLine = action.payload;
    }
  }
});

export const { selectLine } = linesSlice.actions;

export default linesSlice.reducer;
