import { useEffect } from "react";
import Hero from "../components/hero/Hero";

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
      <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center sm:px-12 xl:px-0">
        <Hero />
      </main>
    </>
  );
}

export default HomePage;
