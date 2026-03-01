import { useEffect } from "react";
import showSuccessToast from "../components/common/Toast";
import ContactForm from "../components/contact/ContactForm";

function ContactPage() {
  useEffect(() => {
    document.title = "meerkat | Contact";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact us here by sending us a message through our message form.",
      );
    }
  }, []);
  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center gap-8 px-4 sm:px-12 xl:px-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold sm:text-4xl">Contact Us</h1>
        <p className="text-lg font-light">
          Have a question about your order, a product, or anything else? Send us
          a message and our team will get back to you as soon as possible.
        </p>
      </div>
      <button
        className="btn-primary"
        onClick={() => showSuccessToast("Message has been sent.")}
      >
        Open toast test
      </button>
      <ContactForm />
    </main>
  );
}

export default ContactPage;
