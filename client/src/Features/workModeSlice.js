import { createSlice } from "@reduxjs/toolkit";

const workModeSlice = createSlice({
    name: "workMode",
    initialState: { selectedOptions: [] },
    reducers: {
      toggleWorkModeOption: (state, action) => {
        const optionIndex = state.selectedOptions.indexOf(action.payload);
        if (optionIndex === -1) {
          state.selectedOptions.push(action.payload);
        } else {
          state.selectedOptions.splice(optionIndex, 1);
        }
      },
    },
  });

export const { toggleWorkModeOption } = workModeSlice.actions;
export default workModeSlice.reducer;