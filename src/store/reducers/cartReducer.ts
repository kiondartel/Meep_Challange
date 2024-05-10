import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../service/products/payload/productPayload";

interface CartState {
  cart: Product[];
  allProduct: Product[];
}

const initialState: CartState = {
  cart: [],
  allProduct: [],
};

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeProductToCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    incrementProductQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        state.cart.push({ ...product });
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProduct = action.payload;
    },
  },
});

export const {
  addProductToCart,
  removeProductToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  setAllProducts,
} = sliceCart.actions;

export default sliceCart.reducer;
