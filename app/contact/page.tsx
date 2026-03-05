import { ContactForm } from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="mb-4 font-mono text-3xl font-bold text-[var(--foreground)]">
        Contact
      </h1>
      <p className="mb-12 text-[var(--foreground)]/80">
        Have a question or want to work together? Send a message.
      </p>
      <ContactForm />
    </section>
  );
}
