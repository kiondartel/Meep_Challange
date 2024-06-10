import api from "../BaseHttp";
import { Product } from "./payload/productPayload";

export const PRODUCTS_PATH = "/products";

export class ProductService {
  static async fetchProducts(
    page: number,
    rows: number,
    sortBy: string,
    orderBy: "ASC" | "DESC"
  ): Promise<Product[]> {
    try {
      const response = await api.get(PRODUCTS_PATH, {
        page: page,
        rows: rows,
        sortBy: sortBy,
        orderBy: orderBy,
      });
      return response.data.products;
    } catch (error) {
      throw new Error(`Erro ao buscar produtos: ${error}`);
    }
  }
}
