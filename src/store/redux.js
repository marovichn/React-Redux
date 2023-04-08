import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./Counter";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: { con: counterSliceReducer, auth: authSliceReducer },
});

export default store;
