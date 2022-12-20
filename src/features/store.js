import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import selectedDataReducer from "./data/selectedData";
import logReducer from "./log/logSlice";
import userReducer from "./user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};
const combineReducer = combineReducers({
  data: dataReducer,
  selectedData: selectedDataReducer,
  log: logReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
