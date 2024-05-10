import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./cartReducer";

const store = configureStore({
  reducer: {
    cart: sliceCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
