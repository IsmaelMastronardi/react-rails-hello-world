import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greetingSlice';

const store = configureStore({
  reducer: {
    greetingStore: greetingReducer,
  },
});

export default store;