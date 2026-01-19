import CategoryGallery from "@/components/CategoryGallery";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function RenovationsPage() {
  const images = projects
    .filter((p) => p.category === "renovations")
    .flatMap((p) => p.images);

  return <CategoryGallery title="Renovations" images={images} />;
}
