import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-12 font-mono text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
        About
      </h1>

      <div className="space-y-8 text-[var(--foreground)]/90 leading-relaxed">
        <p>
          I&apos;m a Computer Science and Finance student at Boston College,
          passionate about AI research and software engineering. My path has been less about
          picking one lane and more about connecting them: building models from
          scratch to understand the math, then shipping products that put that
          understanding to work.
        </p>

        <p>
          I started my journey working at startups at the age of 16. I then pivoted to AI research, neural networks, 
          computer vision, the fundamentals. That led to building full-stack apps and AI Inference Integrations: FastAPI backends,
          Next.js frontends, Docker deployments. Along the way, I picked up iOS
          development. 
        </p>

        <p>
          One constant: cats. I&apos;ve lived with them for years, and that
          experience shaped a lot of what I build. Watching how they communicate
          through body language, tail flicks, ear positions, posture sparked a
          question: what if we could decode that? That curiosity led to{" "}
          <Link
            href="/projects/tailtranslate"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            TailTranslate
          </Link>{" "}
          (Swift Student Challenge 2026) and{" "}
          <Link
            href="/projects/pawsnapai"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            PawSnapAI
          </Link>
          , both projects attempt to bridge the gap between humans and animals using
          vision AI.
        </p>

        <p>
          Today I focus on the overlap of tech and finance: data-driven
          decisions, building systems that scale, and understanding the
          &quot;why&quot; behind the code.
        </p>
      </div>
    </section>
  );
}
