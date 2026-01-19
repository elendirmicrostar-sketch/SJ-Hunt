import { getCategoryImages } from "@/lib/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export default function NewBuildsPage() {
  const images = getCategoryImages("new-builds");
  return <CategoryGallery title="New Builds" images={images} />;
}
