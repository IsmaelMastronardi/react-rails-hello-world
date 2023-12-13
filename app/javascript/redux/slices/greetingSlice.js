import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchCars = createAsyncThunk('cars/index',
//   async () => {
//     const authTokenData = sessionStorage.getItem('authToken');
//     try {
//       const response = await axios.get(
//         'http://localhost:3001/api/v1/cars',
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: authTokenData,
//           },
//           withCredentials: true,
//         },
//       );
//       const data = await response.data;
//       return data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   });


const initialState = {
  greeting: "",
  loading: true,
};

export const GreetingsSlice = createSlice({
  name: 'cars array',
  initialState,
  reducers: {
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCars.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchCars.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.carsArray = action.payload;
  //     state.length = state.carsArray.length;
  //   });
  //   builder.addCase(removeCar.fulfilled, (state) => {
  //     state.length -= 1;
  //   });
  // },
});

export default GreetingsSlice.reducer;
