import { FilterByStatusContainer, Container } from "./styles";
import React from "react";
import { useQuery } from "react-query";

import { Product } from "../../service/products/payload/productPayload";
import { fetchProducts } from "../../service/products/ProductService";
import ProductsList from "./components/ProductList";

const ProductShow: React.FC = () => {
  const pageToLoad = 1;
  const rowsPerPage = 10;
  const sortBy = "name";
  const orderBy = "ASC";
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>(
    ["products", pageToLoad, rowsPerPage, sortBy, orderBy],
    () => fetchProducts(pageToLoad, rowsPerPage, sortBy, orderBy),
    {
      retry: true,
    }
  );

  return (
    <Container>
      <FilterByStatusContainer>
        {products && <ProductsList products={products} />}
      </FilterByStatusContainer>
    </Container>
  );
};

export default ProductShow;
