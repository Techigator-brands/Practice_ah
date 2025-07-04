import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import apiReducer from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
  },
});
