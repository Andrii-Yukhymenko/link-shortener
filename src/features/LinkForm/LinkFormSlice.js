import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../API/service";

const initialState = {
  tempInputValue: "",
  shortedLinksList: [],
  error: "",
  loading: false,
};

export const fetchLink = createAsyncThunk(
  "LinkFormSlice/fetchLink",
  async function (link) {
    return Service.pushLink(link).then((resp) => resp.data.result);
  }
);

const LinkFormSlice = createSlice({
  name: "LinkFormSlice",
  initialState,
  reducers: {
    setTempInputValue: (state, action) => {
      state.tempInputValue = action.payload;
    },
    removeShortedLink: (state, action) => {
      state.shortedLinksList = state.shortedLinksList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchLink.pending]: (state, action) => {
      state.error = "";
      state.loading = true;
    },
    // Action это то что возращает нам наш редюсер
    [fetchLink.fulfilled]: (state, action) => {
      state.tempInputValue = "";
      let mutated = { ...action.payload };
      mutated.id = Math.random();
      state.shortedLinksList.push(mutated);
      state.loading = false;
    },
    [fetchLink.rejected]: (state, action) => {
      state.error = "Enter correct link";
      state.loading = false;
    },
  },
});

export default LinkFormSlice.reducer;
export const { setTempInputValue, removeShortedLink, setError } =
  LinkFormSlice.actions;
