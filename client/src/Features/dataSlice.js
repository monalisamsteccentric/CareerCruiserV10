import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../store/store";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    jobs: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = dataSlice.actions;

export default dataSlice.reducer;
