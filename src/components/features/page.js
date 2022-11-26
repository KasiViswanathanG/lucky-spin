import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
});

export default pageSlice.reducer;
export const { nextPage } = pageSlice.actions;
