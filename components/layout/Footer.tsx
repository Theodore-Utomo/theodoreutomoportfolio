import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, label }) => {
            const Icon = SOCIAL_ICONS[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                aria-label={label}
              >
                {Icon && <Icon className="size-5" />}
              </a>
            );
          })}
        </div>
        <p className="text-sm text-[var(--foreground)]/70">
          © {currentYear} Theodore Utomo. Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Next.js
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
