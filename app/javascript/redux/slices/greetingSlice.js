import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSalute = createAsyncThunk('cars/index',
  async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/salutes/random',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.data;
      return data;
    } catch (error) {
      throw new Error(error);
    }
  });


const initialState = {
  greeting: "",
  loading: true,
};

export const GreetingsSlice = createSlice({
  name: 'greeting  slice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSalute.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSalute.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload.greeting;
    });
  },
});

export default GreetingsSlice.reducer;
