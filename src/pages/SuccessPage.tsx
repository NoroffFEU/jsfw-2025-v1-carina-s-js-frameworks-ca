import { useEffect } from "react";

function SuccessPage() {
  useEffect(() => {
    document.title = "meerkat | Checkout Success";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Checkout successfully completed.");
    }
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
      <h1>Success Page</h1>
      <p>Temporary view</p>
    </main>
  );
}

export default SuccessPage;
