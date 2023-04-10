import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import storeSlice from "./storeSlice";

const store = configureStore({
  reducer: { cart: storeSlice.reducer, ui: uiSlice.reducer },
});

export default store;
