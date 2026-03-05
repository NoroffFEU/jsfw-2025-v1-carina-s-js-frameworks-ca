import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/getProducts";

export function useProducts(
  limit: number,
  sort?: string,
  sortOrder?: "asc" | "desc",
) {
  return useInfiniteQuery({
    queryKey: ["products", sort, sortOrder],

    queryFn: ({ pageParam = 1 }) =>
      getAllProducts(pageParam, limit, sort, sortOrder),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.meta.nextPage) return undefined;
      return allPages.length + 1;
    },
  });
}
