import { useEffect } from "react";
import Hero from "../components/hero/Hero";
import ProductGrid from "../components/product/ProductGrid";

function HomePage() {
  useEffect(() => {
    document.title = "meerkat | Home";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Welcome to meerkat - a global marketplace for top brands.",
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <ProductGrid />
    </>
  );
}

export default HomePage;
