import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartWrapper, CartItemCount } from "./styles";

interface ShoppingCartProps {
  total: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ total }) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <ShoppingCartWrapper
      data-testid="shopping-cart-wrapper"
      onClick={() => setCartOpen(true)}
    >
      <FaShoppingCart size={22} />
      <CartItemCount>
        <strong>{total} </strong>
      </CartItemCount>
    </ShoppingCartWrapper>
  );
};
export default ShoppingCart;
