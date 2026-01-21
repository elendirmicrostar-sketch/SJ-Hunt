import { getCategoryImages } from "@/data/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export const dynamic = "force-static";

export default function NewBuildsPage() {
  const images = getCategoryImages("new-builds");
  return <CategoryGallery title="New Builds" images={images} />;
}
