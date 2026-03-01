import { useEffect } from "react";
import ThankYouImage from "../assets/images/illustrations/thank-you.png";

function SuccessPage() {
  useEffect(() => {
    document.title = "meerkat | Checkout Success";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Checkout successfully completed.");
    }
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center px-4 sm:px-12 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-8 p-4 sm:w-145 sm:p-8">
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-75 sm:w-100"
            src={ThankYouImage}
            alt="Illustration: Thank you for your order."
          />
          <p className="text-center text-lg font-light">
            Your purchase has been successfully placed. A confirmation email
            with your order details has been sent to you.
          </p>
        </div>
        <a href="/" className="btn-link">
          Back to products
        </a>
      </div>
    </main>
  );
}

export default SuccessPage;
