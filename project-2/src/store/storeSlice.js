import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const storeSlice = createSlice({
  name: "cart",
  initialState: initialStoreState,
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
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

    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const newRemovedItem = action.payload;
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.changed = true;
      if (removedItem.quantity !== 1) {
        removedItem.quantity--;
        removedItem.totalPrice = removedItem.totalPrice - newRemovedItem.price;
      } else {
        const indexOfRemoved = state.items.indexOf(removedItem);
        state.items.splice(indexOfRemoved, 1);
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const storeActions = storeSlice.actions;
export default storeSlice;
