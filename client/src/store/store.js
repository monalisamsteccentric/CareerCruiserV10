import { createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import dataReducer from "../Features/dataSlice";
import jobCategoryReducer from "../Features/jobCategorySlice";
import locationReducer from "../Features/locationSlice";
import userReducer from "../Features/userSlice";
import workModeReducer from "../Features/workModeSlice";

// Define the async thunk to fetch the data based on the selected filter options
export const fetchData = createAsyncThunk("data/fetchData", async () => {
    console.log(store.getState())
    const requestData = {
      Type: store.getState().jobCategory.selectedOptionId,
      Location: store.getState().location.selectedOptions,
      Category: store.getState().workMode.selectedOptions,
    };
    const response = await axios.get("http://localhost:8000/jobs", {
      params: requestData,
    });
    return response.data;
  });

// Combine the slices into a single root slice
const rootReducer = {
  jobCategory: jobCategoryReducer,
  location: locationReducer,
  workMode: workModeReducer,
  data: dataReducer,
};

// Create the Redux store with the root reducer
const store = configureStore({
  reducer: {
    user: userReducer,
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchData },
      },
    }),
});

export default store;
