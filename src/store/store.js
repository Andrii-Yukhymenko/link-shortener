import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LinkFormSlice from "../features/LinkForm/LinkFormSlice";

const rootReducer = combineReducers({
  linkForm: LinkFormSlice,
});

export const store = configureStore({ reducer: rootReducer });
