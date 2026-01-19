import CategoryGallery from "@/components/CategoryGallery";
import { getCategoryImages } from "@/data/category-covers";

export default function RenovationsPage() {
  const images = getCategoryImages("renovations");
  return <CategoryGallery title="Renovations" images={images} />;
}
