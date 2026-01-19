import CategoryGallery from "@/components/CategoryGallery";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function NewBuildsPage() {
  const images = projects
    .filter((p) => p.category === "new-builds")
    .flatMap((p) => p.images);

  return <CategoryGallery title="New Builds" images={images} />;
}
