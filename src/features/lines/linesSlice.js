import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLineData, getLinesData } from '../../api/api';

// const lines = localStorage.getItem('lines') ? JSON.parse(localStorage.getItem('lines')) : [];
// const selectedLine = localStorage.getItem('selectedLine') ? JSON.parse(localStorage.getItem('selectedLine')) : null;

const initialState = {
  lines: [],
  selectedLine: null,
  linesFilter: [],
  selectedRoute: null,
  isLoading: false,
  error: false
  // getDefaultSelectedRoute: () => this.selectedLine?.routes[0]
};

export const fetchLinesData = createAsyncThunk('lines/fetchLinesData', async () => {
  return await getLinesData()
    // .then(console.log)
    .catch(console.error);
});

export const fetchLineData = createAsyncThunk('lines/fetchLineData', async (line) => {
  return await getLineData(line)
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
    },
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload;
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

      //   if (!localStorage.getItem('lines')) {
      //     localStorage.setItem('lines', JSON.stringify(action.payload));
      //   }
    });
    builder.addCase(fetchLinesData.rejected, (state, action) => {
      console.error(action.payload);
      state.error = true;
    });
    builder.addCase(fetchLineData.pending, (state) => {
      console.log('loading line...');
      state.isLoading = true;
    });
    builder.addCase(fetchLineData.fulfilled, (state, action) => {
      console.log('Line data received');
      state.selectedLine = action.payload;

      //   if (!localStorage.getItem('selectedLine')) {
      //     localStorage.setItem('selectedLine', JSON.stringify(action.payload));
      //   }
    });
    builder.addCase(fetchLineData.rejected, (state, action) => {
      console.error(action.payload);
      state.error = true;
    });
  }
});

export const { selectLine, updateFilter, selectRoute } = linesSlice.actions;

export default linesSlice.reducer;
