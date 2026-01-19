export type CategoryKey = "extensions" | "renovations" | "new-builds";

export const categoryCovers: Record<CategoryKey, string> = {
  // Pick ONE image that you know exists in each folder
  extensions: "/projects/extensions/project-01/IMG_0490.JPG",
  renovations: "/projects/renovations/project-01/IMG_1768.JPG",
  "new-builds": "/projects/new-builds/project-01/01.webp", // change to a JPG if you have one
};

export function coverFor(category: CategoryKey) {
  return categoryCovers[category] ?? "/brand/logo.png";
}
