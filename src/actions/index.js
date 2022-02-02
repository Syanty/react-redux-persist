import { SET_USER, SET_BOOKS, ADD_TO_CART } from "./types";

export const userAdded = (user) => {
  return {
    type: SET_USER,
    payload: {
      ...user,
    },
  };
};
export const booksAdded = (books) => {
  return {
    type: SET_BOOKS,
    payload: [...books],
  };
};
export const addedToCart = (books) => {
  return {
    type: ADD_TO_CART,
    payload: [...books],
  };
};
