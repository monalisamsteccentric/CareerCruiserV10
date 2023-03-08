import { createSlice } from "@reduxjs/toolkit";

const jobCategorySlice = createSlice({
  name: "jobCategory",
  initialState: { selectedOptionId: null },
  reducers: {
    setJobCategoryOption: (state, action) => {
      state.selectedOptionId = action.payload;
    },
  },
});

export const { setJobCategoryOption } = jobCategorySlice.actions;
export default jobCategorySlice.reducer;
