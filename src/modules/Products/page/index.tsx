import { FilterByStatusContainer, Container } from "./styles";
import React from "react";
import { useQuery } from "react-query";

import { Product } from "../../../service/products/payload/productPayload";
import { fetchProducts } from "../../../service/products/ProductService";
import ProductsList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../../../store/reducers/cartReducer";
import Loader from "../../../components/LoadingSpinner";

const ProductShow: React.FC = () => {
  const pageToLoad = 1;
  const rowsPerPage = 10;
  const sortBy = "name";
  const orderBy = "ASC";
  const dispatch = useDispatch();
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
  if (products) {
    dispatch(setAllProducts(products));
  }
  return (
    <Container>
      <FilterByStatusContainer>
        {isLoading && <Loader />}
        {error && <p>Error: {error.message}</p>}
        {products && <ProductsList products={products} />}
      </FilterByStatusContainer>
    </Container>
  );
};

export default ProductShow;
