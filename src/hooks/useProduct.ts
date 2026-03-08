import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/getProducts";

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });
}
