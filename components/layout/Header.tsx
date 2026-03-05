"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, User, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Projects: FolderKanban,
  About: User,
  Contact: Mail,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
        >
          Theodore Utomo
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const Icon = NAV_ICONS[label];
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                  }`}
                >
                  {Icon && <Icon className="size-4" />}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex size-10 items-center justify-center rounded-lg text-[var(--foreground)] hover:bg-[var(--surface)] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map(({ href, label }) => {
                const Icon = NAV_ICONS[label];
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 py-3 text-base font-medium transition-colors hover:text-[var(--accent)] ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                      }`}
                    >
                      {Icon && <Icon className="size-5" />}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
