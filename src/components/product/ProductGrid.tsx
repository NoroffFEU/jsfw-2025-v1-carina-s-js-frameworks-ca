import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Sort from "../common/Sort";
import { useProductFilters } from "../../hooks/useProductFilters";
import Spinner from "../common/LoadingSpinner";

const ProductGrid = () => {
  const { sort, sortOrder, handleSortChange } = useProductFilters();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts(12, sort, sortOrder);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{(error as Error).message}</p>;

  const products = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <section className="px-4 py-8 sm:px-0" id="products-section">
      <div>
        <h2 className="text-3xl font-semibold sm:text-4xl">Our Products</h2>
      </div>
      <div className="mt-2 flex justify-start sm:justify-end">
        <Sort onSortChange={handleSortChange} />
      </div>
      <div className="grid gap-12 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center py-6">
          <button
            onClick={() => fetchNextPage()}
            className="btn-primary flex items-center justify-center gap-2"
          >
            {isFetchingNextPage ? (
              <>
                <Spinner />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
