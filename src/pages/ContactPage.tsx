import { useEffect } from "react";

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
    <main className="mx-auto flex w-full max-w-7xl grow flex-col justify-center bg-amber-100 px-4 sm:px-12 xl:px-0">
      <h1>Contact Page</h1>
      <p>Temporary view</p>
    </main>
  );
}

export default ContactPage;
