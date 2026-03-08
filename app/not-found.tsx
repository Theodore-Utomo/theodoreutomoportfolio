import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-8 py-6 font-mono">
        <p className="text-[var(--accent)]">$ ls page</p>
        <p className="mt-1 text-amber-600 dark:text-amber-400">
          ls: cannot access &apos;page&apos;: No such file or directory
        </p>
        <p className="mt-4 text-4xl font-bold text-[var(--foreground)]">404</p>
      </div>
      <p className="mt-8 text-[var(--foreground)]/80">
        This page doesn&apos;t exist. Maybe it was moved or the URL is wrong.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <Home className="size-4" />
          Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="size-4" />
          View Projects
        </Link>
      </div>
    </section>
  );
}
