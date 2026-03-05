import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]/70 transition-colors hover:text-[var(--accent)]"
      >
        <ArrowLeft className="size-4" />
        Back to Projects
      </Link>

      <header className="mb-12">
        <h1 className="font-mono text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-[var(--accent)]">{project.tagline}</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="mb-3 font-mono text-lg font-semibold text-[var(--foreground)]">
            Problem
          </h2>
          <p className="leading-relaxed text-[var(--foreground)]/90">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-lg font-semibold text-[var(--foreground)]">
            Solution
          </h2>
          <p className="leading-relaxed text-[var(--foreground)]/90">
            {project.solution}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-lg font-semibold text-[var(--foreground)]">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-sm text-[var(--foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {(project.githubUrl || project.externalUrl) && (
          <section>
            <h2 className="mb-3 font-mono text-lg font-semibold text-[var(--foreground)]">
              Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Github className="size-4" />
                  View on GitHub
                </a>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
