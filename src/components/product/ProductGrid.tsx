import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

const ProductGrid = () => {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{(error as Error).message}</p>;

  return (
    <section className="px-4 py-8 sm:px-0" id="products-section">
      <div>
        <h2 className="text-3xl font-semibold">Our Products</h2>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center py-4">
          <p>Sort component coming soon...</p>
          <span className="iconify-[material-symbols--mobiledata-arrows]"></span>
        </div>
      </div>
      <div className="grid gap-12 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="py-4 text-center">
        <p>Scroll to load more coming soon...</p>
      </div>
    </section>
  );
};

export default ProductGrid;
