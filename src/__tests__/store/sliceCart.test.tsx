import { renderHook } from "@testing-library/react-hooks";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  addProductToCart,
} from "../../store/reducers/cartReducer";
import { ReactNode, act } from "react";

import mockProducts from "../mocks/products.json";

const createWrapper = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return { store, wrapper };
};

describe("cart slice", () => {
  it("should add a product to cart", () => {
    const { store, wrapper } = createWrapper();
    const { result } = renderHook(() => useDispatch(), { wrapper });

    act(() => {
      result.current(addProductToCart(mockProducts[0]));
    });

    const state = store.getState();
    expect(state.cart.cart).toContainEqual(mockProducts[0]);
  });
});
