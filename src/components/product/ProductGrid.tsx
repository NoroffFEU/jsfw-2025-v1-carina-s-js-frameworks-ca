import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

const ProductGrid = () => {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{(error as Error).message}</p>;

  return (
    <section>
      {data?.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
