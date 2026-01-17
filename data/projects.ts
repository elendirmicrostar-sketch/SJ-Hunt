export type Category = "Extensions" | "Renovations" | "New Builds";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: Category;
  summary: string;
  cover: string;
  images: string[];
  videos?: { src: string; poster?: string; label?: string }[];
};

export const projects: Project[] = [
  {
    slug: "rear-extension-sandhurst",
    title: "Rear Extension",
    location: "Sandhurst",
    category: "Extensions",
    summary: "Open-plan living space with a seamless finish and matching details.",
    cover: "/projects/rear-extension-sandhurst/IMG_3271.webp",
    images: [
      "/projects/IMG_3255.webp",
      "/projects/IMG_3256.webp",
      "/projects/IMG_3257.webp",
      "/projects/IMG_3258.webp",
      "/projects/IMG_3259.webp",
      "/projects/IMG_3260.webp",
      "/projects/IMG_3261.webp",
      "/projects/IMG_3262.webp",
    ],
    videos: [
      // Later: put clips in /public/projects/... or use hosted URLs
      // { src: "/projects/rear-extension-sandhurst/site-walkthrough.mp4", label: "Walkthrough" }
    ],
  },
];
