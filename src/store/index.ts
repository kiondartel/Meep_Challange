import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    cart: sliceCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
