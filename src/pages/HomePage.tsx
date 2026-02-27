import { useEffect } from "react";

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
      <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
        <h1>Home Page</h1>
        <p>Temporary view</p>
      </main>
    </>
  );
}

export default HomePage;
