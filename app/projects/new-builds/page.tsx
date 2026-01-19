import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import GalleryGrid from "@/components/GalleryGrid";

const CATEGORIES = ["extensions", "renovations", "new-builds"] as const;
type Category = (typeof CATEGORIES)[number];

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export default function new-buildsPage() {
  const list = projects.filter((p) => p.category === "new-builds");

  return (
    <main className="wrap">
      <h1>New Builds</h1>
      <GalleryGrid projects={list} />
    </main>
  );
}