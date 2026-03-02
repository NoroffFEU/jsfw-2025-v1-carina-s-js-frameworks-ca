import { useEffect } from "react";
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
    <main className="mx-auto flex w-full max-w-7xl grow flex-col items-center justify-center gap-8 px-4 sm:px-12 xl:px-0">
      <section className="py-b flex max-w-145 flex-col gap-6 pt-4 pb-8 sm:pt-8 sm:pb-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold sm:text-4xl">Contact Us</h1>
          <p className="text-lg font-light">
            Have a question about your order, a product, or anything else? Send
            us a message and our team will get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}

export default ContactPage;
