import CategoryGallery from "@/components/CategoryGallery";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function ExtensionsPage() {
  const images = projects
    .filter((p) => p.category === "extensions")
    .flatMap((p) => p.images);

  return <CategoryGallery title="Extensions" images={images} />;
}
