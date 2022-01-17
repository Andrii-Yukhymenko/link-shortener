import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempInputValue: '',
};

const LinkFormSlice = createSlice({
  name: "LinkFormSlice",
  initialState,
  reducers: {
    setTempInputValue: (state, action) => {
      state.tempInputValue = action.payload;
    },
  },
});

export default LinkFormSlice.reducer;
export const { setTempInputValue } = LinkFormSlice.actions;
