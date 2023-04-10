import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  items: [],
  totalQuantity: 0,
};

const storeSlice = createSlice({
  name: "cart",
  initialState: initialStoreState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {},
  },
});

export const storeActions = storeSlice.actions;
export default storeSlice;
