import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserName = createAsyncThunk(
  'user/fetchUserName',
  async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post("http://localhost:8000/users", { token });
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: { username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : '', 
    userId: localStorage.getItem('userId') ? JSON.parse(localStorage.getItem('userId')) : '' },
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUserName.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserName.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('username', JSON.stringify(action.payload.username));
      localStorage.setItem('userId', JSON.stringify(action.payload.userId));
    },
    [fetchUserName.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default userSlice.reducer;
