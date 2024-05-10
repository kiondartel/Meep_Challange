import { fetchProducts } from "../../../service/products/ProductService";
import mockProducts from "../../mocks/products.json";

const customGlobal: any = global;
customGlobal.fetch = jest.fn();

describe("fetchProducts", () => {
  beforeEach(() => {
    customGlobal.fetch.mockClear();
  });

  it("returns products on successful fetch", async () => {
    customGlobal.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ products: mockProducts }),
    });

    const products = await fetchProducts(1, 10, "name", "ASC");
    expect(products).toEqual(mockProducts);
  });

  it("throws an error on network failure", async () => {
    customGlobal.fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchProducts(1, 10, "name", "ASC")).rejects.toThrow(
      "Network response was not ok"
    );
  });
});
