import { get } from "./api";
import {
  type Product,
  type PaginatedResponse,
  type SingleProductResponse,
} from "../types/Product";

export async function getAllProducts(
  page: number = 1,
  limit: number = 12,
  sort?: string,
  sortOrder?: "asc" | "desc",
): Promise<PaginatedResponse<Product>> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (sort) params.append("sort", sort);
  if (sortOrder) params.append("sortOrder", sortOrder);

  return get<PaginatedResponse<Product>>(`/online-shop?${params.toString()}`);
}

export async function getSingleProduct(
  id: string,
): Promise<SingleProductResponse> {
  return get<SingleProductResponse>(`/online-shop/${id}`);
}
