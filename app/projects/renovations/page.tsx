import { getCategoryImages } from "@/data/category-images";
import CategoryGallery from "@/components/CategoryGallery";

export const dynamic = "force-static";

export default function RenovationsPage() {
  const images = getCategoryImages("renovations");
  return <CategoryGallery title="Renovations" images={images} />;
}
