import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLinesData } from '../../api/api';

const initialState = {
  lines: [],
  selectedLine: null,
  linesFilter: [],
  isLoading: false,
  error: false
};

export const fetchLinesData = createAsyncThunk('lines/fetchLinesData', async () => {
  return await getLinesData()
    // .then(console.log)
    .catch(console.error);
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLinesData.pending, (state) => {
      console.log('loading...');
      state.isLoading = true;
    });
    builder.addCase(fetchLinesData.fulfilled, (state, action) => {
      console.log('Lines data received');
      state.lines = action.payload;
    });
    builder.addCase(fetchLinesData.rejected, (state, action) => {
      console.error(action.payload);
      state.error = true;
    });
  }
});

export const { selectLine, updateFilter } = linesSlice.actions;

export default linesSlice.reducer;
