import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/getProducts";

export function useProducts(
  page: number,
  limit: number,
  sort?: string,
  sortOrder?: "asc" | "desc",
) {
  return useQuery({
    queryKey: ["products", page, limit, sort, sortOrder],
    queryFn: () => getAllProducts(page, limit, sort, sortOrder),
  });
}
