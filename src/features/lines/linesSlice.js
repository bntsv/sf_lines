import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lines: require('../../api/db/data.json'),
  selectedLine: null,
  linesFilter: []
};

const linesSlice = createSlice({
  name: 'lines',
  initialState,
  reducers: {
    selectLine: (state, action) => {
      state.selectedLine = action.payload;
    },
    updateFilter: (state, action) => {
      state.linesFilter = action.payload;
    }
  }
});

export const { selectLine, updateFilter } = linesSlice.actions;

export default linesSlice.reducer;
