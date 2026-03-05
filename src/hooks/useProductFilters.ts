import { useState } from "react";

export function useProductFilters() {
  const [sort, setSort] = useState<string | undefined>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>();

  const handleSortChange = (value: string) => {
    const [field, order] = value.split("-");
    setSort(field);
    setSortOrder(order as "asc" | "desc");
  };

  return {
    sort,
    sortOrder,
    handleSortChange,
  };
}
