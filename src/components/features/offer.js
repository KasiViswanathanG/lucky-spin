import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offer: "",
};

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    offerWon: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export default offerSlice.reducer;
export const { offerWon } = offerSlice.actions;
