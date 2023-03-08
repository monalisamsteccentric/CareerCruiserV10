
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "location",
    initialState: { selectedOptions: [] },
    reducers: {
      toggleLocationOption: (state, action) => {
        const optionIndex = state.selectedOptions.indexOf(action.payload);
        if (optionIndex === -1) {
          state.selectedOptions.push(action.payload);
        } else {
          state.selectedOptions.splice(optionIndex, 1);
        }
      },
    },
  });

export const { toggleLocationOption } = locationSlice.actions;
export default locationSlice.reducer;
