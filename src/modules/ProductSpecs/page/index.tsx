import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addProductToCart } from "../../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import {
  AddToCartButton,
  ProductContainer,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./styles";
import { Product } from "../../../service/products/payload/productPayload";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.allProduct);
  const fildItem = cartItems.filter((item) => item.id === Number(id));

  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };
  console.log(id);
  console.log(cartItems);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {fildItem.map((items) => (
        <ProductContainer key={items.id}>
          <ProductImage src={items.photo} alt={items.name} />
          <ProductDetails>
            <ProductTitle>{items.name}</ProductTitle>
            <ProductDescription>{items.description}</ProductDescription>
            <ProductPrice>
              Preço: R${parseFloat(items.price).toFixed(2)}
            </ProductPrice>
            <AddToCartButton onClick={() => handleAddToCart(items)}>
              Adicionar ao Carrinho
            </AddToCartButton>
          </ProductDetails>
        </ProductContainer>
      ))}
    </div>
  );
};

export default ProductDetail;
