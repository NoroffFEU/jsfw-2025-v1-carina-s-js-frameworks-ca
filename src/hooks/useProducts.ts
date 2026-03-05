import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/getProducts";

export function useProducts(
  page: number = 1,
  limit: number = 12,
  sort?: string,
  sortOrder?: "asc" | "desc",
) {
  return useQuery({
    queryKey: ["products", page, limit, sort, sortOrder],
    queryFn: () => getAllProducts(page, limit, sort, sortOrder),
  });
}
