import { getCategoryImages } from "@/lib/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export default function ExtensionsPage() {
  const images = getCategoryImages("extensions");
  return <CategoryGallery title="Extensions" images={images} />;
}
