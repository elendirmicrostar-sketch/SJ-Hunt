export type CategoryKey = "extensions" | "renovations" | "new-builds";

export const categoryCovers: Record<CategoryKey, string> = {
  extensions: "/projects/extensions/project-01/IMG_2461.JPG",
  renovations: "/projects/renovations/project-01/IMG_0141.JPG",
  "new-builds": "/projects/new-builds/project-01/cover.webp",
};

export function coverFor(category: CategoryKey) {
  return categoryCovers[category] ?? "/brand/logo.png";
}

// alias name some pages used earlier
export const categoryCover = coverFor;
