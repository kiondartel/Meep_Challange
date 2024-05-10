import React from "react";
import {
  ProductContainer,
  Image,
  ProductsGrid,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductInfo,
  BuyButtonLink,
} from "./styles";
import { Product } from "../../../../service/products/payload/productPayload";

import { MdAddShoppingCart } from "react-icons/md";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <Image src={product.photo} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              R${parseFloat(product.price).toFixed(0)}
            </ProductPrice>
          </ProductInfo>
          <ProductDescription>
            Redesigned from scratch and completely revised.
          </ProductDescription>

          <BuyButtonLink to={`/product/${product.id}`}>
            <MdAddShoppingCart size={25} />
            <h3>Detalhes do produto</h3>
          </BuyButtonLink>
        </ProductContainer>
      ))}
    </ProductsGrid>
  );
};

export default ProductsList;
