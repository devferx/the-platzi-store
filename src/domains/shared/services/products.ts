import { storeApi } from "@shared/api/store";
import { Product } from "@shared/models/product";

export async function getProducts(page = 1): Promise<Product[]> {
  const offset = (page - 1) * 10;
  const limit = 10;

  const { data } = await storeApi.get<Product[]>(
    `/products?offset=${offset}&limit=${limit}`,
  );

  return data;
}

export async function getProduct(productId: string): Promise<Product> {
  const { data } = await storeApi.get<Product>(`/products/${productId}`);

  return data;
}
