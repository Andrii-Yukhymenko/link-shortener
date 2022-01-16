import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 3,
};

const LinkFormSlice = createSlice({
  name: "LinkFormSlice",
  initialState,
  reducers: {
    getCash: (state) => {
      state.value = 4;
    },
  },
});

export default LinkFormSlice.reducer;
export const { getCash } = LinkFormSlice.actions;
