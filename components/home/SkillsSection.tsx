"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/skills";
import { getSkillIcon } from "@/lib/skill-icons";

const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.items);
const UNIQUE_SKILLS = [...new Set(ALL_SKILLS)];

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-4 font-mono text-sm font-medium text-[var(--foreground)]/60">
          Skills & Tools
        </h2>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          {UNIQUE_SKILLS.map((skill) => {
            const Icon = getSkillIcon(skill);
            return (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-sm text-[var(--foreground)]/90"
              >
                <Icon className="size-4 shrink-0" />
                {skill}
              </span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
