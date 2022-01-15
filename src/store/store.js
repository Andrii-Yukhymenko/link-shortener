import {configureStore, combineReducers} from "@reduxjs/toolkit";
import bankSlice from "../features/bank/bankSlice";

const rootReducer = combineReducers({
  bank: bankSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})