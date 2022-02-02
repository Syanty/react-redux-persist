import userReducer from "./user";
import bookReducer from "./book";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: userReducer,
  books: bookReducer,
  cart: cartReducer,
});

export default reducers;
