import { configureStore } from "@reduxjs/toolkit";
import offerReducer from "../features/offer";
import pageReducer from "../features/page";

const store = configureStore({
  reducer: {
    offer: offerReducer,
    page: pageReducer,
  },
});

export default store;
