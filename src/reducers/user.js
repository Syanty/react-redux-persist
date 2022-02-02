import { SET_USER } from "../actions/types";

const initialState = {
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
