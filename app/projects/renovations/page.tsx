import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/lib/category-images";

export default function RenovationsPage() {
  const images = getCategoryImages("renovations");
  return <CategoryGallery title="Renovations" images={images} />;
}
