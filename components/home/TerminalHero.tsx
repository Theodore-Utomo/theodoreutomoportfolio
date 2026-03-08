"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LINES = [
  { prompt: "$ whoami", output: "Theodore Utomo" },
  { prompt: "$ school", output: "Boston College" },
  { prompt: "$ role", output: "CS + Finance | AI/Software Engineering " },
  { prompt: "$ focus", output: "Building at the forefront of technology" },
  { prompt: "$ cat interests", output: "Agentic AI Orchestration, iOS, Animal-Tech, Full-Stack" },
];

const CD_COMMANDS: Record<string, string> = {
  projects: "/projects",
  about: "/about",
  contact: "/contact",
};

export function TerminalHero() {
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [commandHistory, setCommandHistory] = useState<{ cmd: string; output?: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (!trimmed) return;

    const parts = trimmed.split(/\s+/);
    const target = parts[0] === "cd" ? parts[1]?.replace(/^\//, "") : parts[0]?.replace(/^\//, "");
    const path = target && CD_COMMANDS[target];

    setCommandHistory((prev) => [
      ...prev,
      {
        cmd: `$ ${trimmed}`,
        output: path
          ? `Navigating to ${path}...`
          : `cd: no such path '${target || trimmed}'. Try: cd projects | cd about | cd contact`,
      },
    ]);

    if (path) {
      setInput("");
      setTimeout(() => router.push(path), 400);
    } else {
      setInput("");
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg"
      >
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-[var(--foreground)]/60">
            terminal — zsh
          </span>
        </div>
        <div className="space-y-1 p-6 font-mono text-sm">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.4, duration: 0.3 }}
              className="flex flex-wrap gap-x-2 gap-y-1"
            >
              <span className="text-[var(--accent)]">{line.prompt}</span>
              <span className="text-[var(--foreground)]">{line.output}</span>
            </motion.div>
          ))}
          {commandHistory.map((entry, i) => (
            <div key={i} className="flex flex-wrap gap-x-2 gap-y-1">
              <span className="text-[var(--accent)]">{entry.cmd}</span>
              {entry.output && (
                <span
                  className={
                    entry.output.startsWith("Navigating")
                      ? "text-[var(--accent)]"
                      : "text-amber-600 dark:text-amber-400"
                  }
                >
                  {entry.output}
                </span>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-1 pt-2">
            <span className="text-[var(--accent)]">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-w-[200px] flex-1 border-none bg-transparent font-mono text-[var(--foreground)] outline-none focus:ring-0"
              placeholder=""
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
            <span className="animate-pulse">▌</span>
          </form>
        </div>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-[var(--border)] bg-[var(--background)]/50 px-6 py-3"
          >
            <p className="font-mono text-xs text-[var(--foreground)]/60">
              Type <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5">cd projects</kbd>
              , <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5">cd about</kbd>
              , or <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5">cd contact</kbd>
              {" "}and press Enter to navigate
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.5 }}
        className="mt-8 space-y-4 text-center"
      >
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/80">
          I&apos;m a Computer Science and Finance student at Boston College,
          passionate about AI research and software engineering. I started at
          startups at 16, then pivoted to AI research and full-stack building.
          One constant: cats and fitness. That curiosity led to me building projects
          that centered around those interests, both exploring the possibilities between humans and animals.
        </p>
      </motion.div>
    </section>
  );
}
