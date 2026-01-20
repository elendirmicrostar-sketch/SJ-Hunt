import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/data/category-images";

export default function ExtensionsPage() {
  const images = getCategoryImages("extensions");
  return <CategoryGallery title="Extensions" images={images} />;
}
