import { getCategoryImages } from "@/data/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export const dynamic = "force-static";

export default function ExtensionsPage() {
  const images = getCategoryImages("extensions");

  return <CategoryGallery title="Extensions" images={images} />;
}
