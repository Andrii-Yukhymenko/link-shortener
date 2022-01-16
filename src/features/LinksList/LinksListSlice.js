import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shortedLinks: ["ass"],
};

const LinksListSlice = createSlice({
  name: "LinkFormSlice",
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.shortedLinks.push(action.payload);
    },
  },
});

export default LinksListSlice.reducer;
export const { addLink } = LinksListSlice.actions;
