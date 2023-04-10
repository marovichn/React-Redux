import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  items: [
    {
      id: "id1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
  ],
  cart: [],
  totalPrice: 0,
  totalItems: 0,
  showCart: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState: initialStoreState,
  reducers: {
    addToCart(state, action) {
      if (state.cart.length === 0) {
        state.cart.push(action.payload);
        state.totalPrice = state.totalPrice + action.payload.price;
        state.totalItems++;
      }
      state.cart.forEach((item) => {
        if (item.id !== action.payload.id) {
          state.cart.push(action.payload);
          state.totalPrice = state.totalPrice + action.payload.price;
        } else {
          state.totalItems++;
        }
      });
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      state.totalItems = state.totalItems + 1;
      state.totalPrice = state.totalPrice + action.payload;
    },
    removeItem(state, action) {
      if (state.totalItems === 1) {
        state.cart = [];
        state.totalPrice = 0;
      } else {
        state.totalItems = state.totalItems - 1;
        state.totalPrice = state.totalPrice - action.payload;
      }
    },
  },
});

const store = configureStore({
  reducer: storeSlice.reducer,
});

export const storeActions = storeSlice.actions;
export default store;
