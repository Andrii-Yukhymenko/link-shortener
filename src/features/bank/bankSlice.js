import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 150,
}

const bankSlice = createSlice({
  name: 'bankSlice',
  initialState: initialState,
  reducers: {
    getMoney(state, action) {
      state.value = state.value - action.payload;
    },
    addMoney(state, action) {
      state.value = state.value + action.payload;
    }
  }
  })

export default bankSlice.reducer;
export const {getMoney, addMoney} = bankSlice.actions;