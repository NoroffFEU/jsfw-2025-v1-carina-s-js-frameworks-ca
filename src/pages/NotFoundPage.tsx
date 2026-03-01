import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "meerkat | 404 - Not Found";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "404 - Page Not Found.");
    }
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-8 px-4 sm:px-12 xl:px-0">
      <div className="bg-primary-ultra-light border-primary-light flex flex-col justify-center gap-4 rounded-sm border px-4 py-8 sm:w-fit sm:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-primary-dark text-[102px] leading-none font-black">
            404
          </h1>
          <p className="text-2xl font-light uppercase">Page Not Found</p>
        </div>
        <p className="text-center text-lg font-light">
          The page you're looking for has been moved or does not exist.
        </p>
      </div>
      <a
        href="/"
        className="bg-secondary-light hover:bg-secondary w-full rounded-sm px-5 py-3 text-center text-lg font-medium sm:w-fit"
      >
        Back to products
      </a>
      <a
        href="/"
        className="bg-secondary-light hover:bg-secondary w-full rounded-sm px-5 py-3 text-center text-lg font-medium transition duration-500 ease-in-out sm:w-fit"
      >
        Back to products
      </a>
    </main>
  );
}

export default NotFoundPage;
