import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Service from "../../API/service";

const initialState = {
  tempInputValue: "",
  list: [],
  error: "",
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
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchLink.pending]: (state, action) => {
      console.log("Началась отправка");
      state.error = ''
    },
    // Action это то что возращает нам наш редюсер
    [fetchLink.fulfilled]: (state, action) => {
      state.tempInputValue = "";
      let mutated = { ...action.payload };
      mutated.id = Math.random();
      state.list.push(mutated);
    },
    [fetchLink.rejected]: (state, action) => {
      console.log("Ошибка отправки");
      state.error = action.error;
    },
  },
});

export default LinkFormSlice.reducer;
export const { setTempInputValue, removeShortedLink } = LinkFormSlice.actions;
