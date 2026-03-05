"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)] hover:shadow-lg">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="font-mono text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
              {project.title}
            </h2>
            <p className="mt-1 line-clamp-2 text-sm text-[var(--foreground)]/70">
              {project.tagline}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--border)] px-2 py-0.5 font-mono text-xs text-[var(--foreground)]/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ArrowRight className="size-5 shrink-0 text-[var(--foreground)]/50 transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
        </div>
      </Link>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs text-[var(--foreground)]/60 hover:text-[var(--accent)]"
        >
          <Github className="size-3.5" />
          GitHub
        </a>
      )}
    </div>
  );
}
