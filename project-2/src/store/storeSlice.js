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
      console.log(newItem);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.items.push(newItem);
      /* if (state.items.length !== 0) {
        state.items.push(item);
      }
      state.items.forEach((i) => {
        if (i.id === item.id) {
          i.quantity = i.quantity + 1;
          state.totalQuantity++;
        } else {
          state.items.push(item);
        }
      }); */
    },

    removeItemFromCart(state, action) {},
  },
});

export const storeActions = storeSlice.actions;
export default storeSlice;
