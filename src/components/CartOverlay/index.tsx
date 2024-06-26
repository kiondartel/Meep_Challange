import React, { useCallback, useMemo, useState } from "react";
import {
  CartOverlay,
  Title,
  CartItem,
  CloseIcon,
  RemoveItemIcon,
  ProductName,
  Image,
  ProductPrice,
  ItemsGrid,
  CartItemQuantitySelector,
  TotalPrice,
  Total,
  Purchase,
} from "./styles";

import { useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { Product } from "../../service/products/payload/productPayload";
import {
  clearCart,
  decrementProductQuantity,
  incrementProductQuantity,
  removeProductToCart,
} from "../../store/reducers/cartReducer";
import Loader from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface CartOverlayProps {
  isOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  itens: Array<Product>;
  totalPrice: number;
}

const CartOverlayComponent: React.FC<CartOverlayProps> = ({
  isOpen,
  setCartOpen,
  itens,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState<boolean>(false);
  const handleRemoveItem = useCallback(
    (id: number) => {
      dispatch(removeProductToCart(id));
    },
    [dispatch]
  );

  const handleIncrement = useCallback(
    (id: number) => {
      dispatch(incrementProductQuantity(id));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (id: number) => {
      dispatch(decrementProductQuantity(id));
    },
    [dispatch]
  );

  const itemCounts = useMemo(() => {
    const counts = new Map<number, number>();
    itens.forEach((item) => {
      counts.set(item.id, (counts.get(item.id) || 0) + 1);
    });
    return counts;
  }, [itens]);

  const uniqueItems = useMemo(() => {
    return itens.reduce((unique: Product[], item) => {
      if (!unique.some((u) => u.id === item.id)) {
        unique.push(item);
      }
      return unique;
    }, []);
  }, [itens]);

  const handlePurchase = () => {
    if (uniqueItems.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setPurchaseCompleted(true);
        setTimeout(() => {
          dispatch(clearCart());
          setPurchaseCompleted(false);
          setCartOpen(false);
          navigate("/");
        }, 2000);
      }, 2000);
    }
    return;
  };
  return (
    <CartOverlay isOpen={isOpen}>
      <Title>
        <h1>
          Carrinho <br></br>de compras
        </h1>
        <CloseIcon size={30} onClick={() => setCartOpen(false)} />
      </Title>
      <ItemsGrid>
        {uniqueItems.map((item) => (
          <CartItem key={item.id}>
            <Image src={item.photo} alt={item.name} />
            <ProductName>{item.name}</ProductName>
            <CartItemQuantitySelector>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{itemCounts.get(item.id)}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </CartItemQuantitySelector>
            <ProductPrice>R${parseFloat(item.price).toFixed(0)}</ProductPrice>
            <RemoveItemIcon onClick={() => handleRemoveItem(item.id)} />
          </CartItem>
        ))}
      </ItemsGrid>
      <TotalPrice>
        <Total>
          <h1>Total:</h1>
          <h1>R${totalPrice}</h1>
        </Total>
        <Purchase onClick={handlePurchase}>
          {isLoading ? (
            <Loader />
          ) : purchaseCompleted ? (
            <h1>
              Sucesso! <FaCheckCircle size={20} />
            </h1>
          ) : (
            <h1>Finalizar Compra</h1>
          )}
        </Purchase>
      </TotalPrice>
    </CartOverlay>
  );
};

export default CartOverlayComponent;
