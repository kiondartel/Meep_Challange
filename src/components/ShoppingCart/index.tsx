import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartWrapper, CartItemCount } from "./styles";
import { Product } from "../../service/products/payload/productPayload";
import CartOverlayComponent from "../CartOverlay";

interface ShoppingCartProps {
  total: number;
  itens: Product[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ total, itens }) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const totalPrice = itens.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <>
      <ShoppingCartWrapper
        data-testid="shopping-cart-wrapper"
        onClick={() => setCartOpen(true)}
      >
        <FaShoppingCart size={22} />
        <CartItemCount>
          <strong>{total} </strong>
        </CartItemCount>
      </ShoppingCartWrapper>
      <CartOverlayComponent
        isOpen={isCartOpen}
        setCartOpen={setCartOpen}
        itens={itens}
        totalPrice={totalPrice}
      />
    </>
  );
};
export default ShoppingCart;
