import userReducer from "./user";
import bookReducer from "./book";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userReducer,
  bookReducer,
  cartReducer,
});

export default reducers;
