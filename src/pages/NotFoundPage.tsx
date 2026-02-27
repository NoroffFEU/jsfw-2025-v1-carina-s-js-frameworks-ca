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
    <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
      <h1>Not Found Page</h1>
      <p>Temporary view</p>
    </main>
  );
}

export default NotFoundPage;
