import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Sort from "../common/Sort";
import { useProductFilters } from "../../hooks/useProductFilters";
import Pagination from "../common/Pagination";

const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const { sort, sortOrder, handleSortChange } = useProductFilters();
  const { data, isLoading, isError, error } = useProducts(
    page,
    16,
    sort,
    sortOrder,
  );

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{(error as Error).message}</p>;

  const products = data?.data ?? [];
  const totalPages = data?.meta?.pageCount ?? 1;

  return (
    <section className="px-4 py-8 sm:px-0" id="products-section" ref={gridRef}>
      <div>
        <h2 className="text-3xl font-semibold sm:text-4xl">Our Products</h2>
      </div>
      <div className="mt-2 flex justify-start sm:justify-end">
        <Sort
          onSortChange={(value) => {
            handleSortChange(value);
            setPage(1);
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 py-6 sm:gap-8 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrevious={() => setPage((prev) => prev - 1)}
        onNext={() => setPage((prev) => prev + 1)}
      />
    </section>
  );
};

export default ProductGrid;
