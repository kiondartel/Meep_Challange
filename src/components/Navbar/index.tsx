import React from "react";

import { NavbarContainer, Brand } from "./styles";
import ShoppingCart from "../ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const NavBar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalItemsInCart = cartItems.length;
  return (
    <NavbarContainer>
      <Brand to="/">
        <h1>Meep</h1>
      </Brand>
      <ShoppingCart total={totalItemsInCart} />
    </NavbarContainer>
  );
};

export default NavBar;
