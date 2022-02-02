import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import allReducer from "../reducers";
const persistConfig = {
  key: "react-root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducer); //all reducers that need to persist
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export default store;

export { persistor };
