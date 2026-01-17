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
    cover: "/projects/rear-extension-sandhurst/01.jpg",
    images: [
      "/projects/IMG_3255.HEIC",
      "/projects/IMG_3256.HEIC",
      "/projects/IMG_3257.HEIC",
      "/projects/IMG_3258.HEIC",
      "/projects/IMG_3259.HEIC",
      "/projects/IMG_3260.HEIC",
      "/projects/IMG_3261.HEIC",
      "/projects/IMG_3262.HEIC",
    ],
    videos: [
      // Later: put clips in /public/projects/... or use hosted URLs
      // { src: "/projects/rear-extension-sandhurst/site-walkthrough.mp4", label: "Walkthrough" }
    ],
  },
];
