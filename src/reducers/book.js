import { SET_BOOKS } from "../actions/types";

const initialState = {
  books: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      return { ...state, books: [...payload] };

    default:
      return state;
  }
};
