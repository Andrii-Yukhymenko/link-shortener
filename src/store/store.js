import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LinkFormSlice from "../features/LinkForm/LinkFormSlice";
import LinksListSlice from "../features/LinksList/LinksListSlice";

const rootReducer = combineReducers({
  linkForm: LinkFormSlice,
  linksList: LinksListSlice,
});

export const store = configureStore({ reducer: rootReducer });
