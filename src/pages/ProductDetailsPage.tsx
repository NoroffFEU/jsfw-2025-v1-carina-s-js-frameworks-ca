import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/getProducts";
import type { Product } from "../types/Product";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await getSingleProduct(id!);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;

    document.title = `${product.title} | Meerkat Shop`;

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", product.description);
    }
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
      <h1>Product Details Page</h1>
      <p>Temporary view</p>
      <ol>
        <li>{product.title}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
      </ol>
    </main>
  );
}

export default ProductDetailsPage;
