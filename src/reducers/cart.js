import { ADD_TO_CART } from "../actions/types";

const cart = [];

export default (state = cart, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return [...state, ...payload];

    default:
      return state;
  }
};
