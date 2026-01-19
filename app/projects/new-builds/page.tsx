import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/lib/category-images";

export default function NewBuildsPage() {
  const images = getCategoryImages("new-builds");
  return <CategoryGallery title="New Builds" images={images} />;
}
