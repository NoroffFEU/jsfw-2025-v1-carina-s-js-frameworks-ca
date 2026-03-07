import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { API_BASE } from "../../constants/apiBase";
import SearchResultsProduct from "./SearchResultProduct";
import type { Product } from "../../types/Product";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["search", query],
    queryFn: async () => {
      const res = await fetch(API_BASE + `/online-shop?search=${query}`);
      const json = await res.json();
      return json.data;
    },
    enabled: query.length > 2,
  });

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  const navigate = useNavigate();

  return (
    <Combobox
      onChange={(product: Product | null) => {
        if (!product) return;
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="bg-gray-light relative w-full rounded sm:mx-4">
        <ComboboxInput
          aria-label="Search input"
          className="w-full px-10 py-2 sm:px-8"
          placeholder="Search for products"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="iconify-[material-symbols--search] text-gray-dark absolute top-1/2 left-2 -translate-y-1/2 md:left-2"></span>
      </div>

      <ComboboxOptions
        anchor="bottom"
        className="w-(--input-width) overflow-hidden rounded-sm empty:invisible"
      >
        {filteredProducts.map((product) => (
          <ComboboxOption key={product.id} value={product}>
            <SearchResultsProduct product={product} />
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
