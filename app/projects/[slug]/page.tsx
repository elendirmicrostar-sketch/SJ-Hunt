import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectClient from "./project-client";

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const exists = projects.some((p) => p.slug === slug);
  if (!exists) return notFound();

  return <ProjectClient slug={slug} />;
}
