import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/getProducts";

export function useProducts(page: number = 1, limit: number = 12) {
  return useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => getAllProducts(page, limit),
  });
}
