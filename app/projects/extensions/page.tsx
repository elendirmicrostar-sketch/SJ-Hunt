import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/data/category-covers";

export default function ExtensionsPage() {
  const images = getCategoryImages("extensions");
  return <CategoryGallery title="Extensions" images={images} />;
}
