import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialStoreState = {
  items: [],
  totalQuantity: 0,
};

const storeSlice = createSlice({
  name: "cart",
  initialState: initialStoreState,
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
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

    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const newRemovedItem = action.payload;
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (removedItem.quantity !== 1) {
        removedItem.quantity--;
        removedItem.totalPrice = removedItem.totalPrice - newRemovedItem.price;
      } else {
        const indexOfRemoved = state.items.indexOf(removedItem);
        state.items.splice(indexOfRemoved, 1);
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending data...",
        message: "Cart data is sending...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://simple-react-app-2b7b6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "app/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully sent cart data :)",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed :(",
          message: err.message,
        })
      );
    }
  };
};

export const storeActions = storeSlice.actions;
export default storeSlice;
