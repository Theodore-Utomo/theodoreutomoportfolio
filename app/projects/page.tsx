import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-16">
        <h1 className="font-mono text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--foreground)]/80">
          Deep-dives into problems I&apos;ve solved and the tech behind them.
          Each project includes a problem/solution breakdown and links to code.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
