import { get } from "./api";
import {
  type Product,
  type PaginatedResponse,
  type SingleProductResponse,
} from "../types/Product";

export async function getAllProducts(
  page: number = 1,
  limit: number = 12,
): Promise<PaginatedResponse<Product>> {
  return get<PaginatedResponse<Product>>(
    `/online-shop?page=${page}&limit=${limit}`,
  );
}

export async function getSingleProduct(
  id: string,
): Promise<SingleProductResponse> {
  return get<SingleProductResponse>(`/online-shop/${id}`);
}
