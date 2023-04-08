import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "IN") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DE") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
const store = createStore(reducerFn);

export default store;
