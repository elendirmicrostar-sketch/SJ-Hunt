import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import GalleryGrid from "@/components/GalleryGrid"; 

const CATEGORIES = ["extensions", "renovations", "new-builds"] as const;
type Category = (typeof CATEGORIES)[number];


export default function ExtensionsPage() {
  const list = projects.filter((p) => p.category === "extensions");

  return (
    <main className="wrap">
      <h1>Extensions</h1>
            <GalleryGrid projects={list} showFilters={false} />
    </main>
  );
}