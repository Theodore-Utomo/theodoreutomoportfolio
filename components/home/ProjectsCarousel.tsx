"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const gap = 24;
    const step = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-mono text-sm font-medium text-[var(--foreground)]/60">
            Projects
          </h2>
          <Link
            href="/projects"
            className="font-mono text-xs text-[var(--accent)] hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scroll-smooth scrollbar-thin"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "thin",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.slug}
                className="min-w-[280px] max-w-[280px] flex-shrink-0 sm:min-w-[320px] sm:max-w-[320px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2 sm:justify-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous projects"
              className="flex size-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next projects"
              className="flex size-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
