import { getCategoryImages } from "@/lib/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export default function RenovationsPage() {
  const images = getCategoryImages("renovations");
  return <CategoryGallery title="Renovations" images={images} />;
}
