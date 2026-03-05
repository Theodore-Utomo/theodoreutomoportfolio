import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
