import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/lib/category-images";

export default function ExtensionsPage() {
  const images = getCategoryImages("extensions");
  return <CategoryGallery title="Extensions" images={images} />;
}
