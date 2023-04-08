import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, hidden: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    hide(state) {
      state.hidden = !state.hidden;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
