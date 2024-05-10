import { Product } from "./payload/productPayload";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Peguei uma api publica que retorna alguns itens eletronicos
export const fetchProducts = async (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: "ASC" | "DESC"
): Promise<Product[]> => {
  const response = await fetch(
    `${BASE_URL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.products;
};
