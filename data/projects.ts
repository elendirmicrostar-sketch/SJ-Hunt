export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    "slug": "extensions-project-01",
    "title": "Project 01",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-01/cover.webp",
    "images": [
      "/projects/extensions/project-01/cover.webp",
      "/projects/extensions/project-01/01.webp",
      "/projects/extensions/project-01/02.webp",
      "/projects/extensions/project-01/03.webp",
      "/projects/extensions/project-01/04.webp",
      "/projects/extensions/project-01/05.webp",
      "/projects/extensions/project-01/06.webp",
      "/projects/extensions/project-01/07.webp",
      "/projects/extensions/project-01/08.webp"
    ]
  },
  {
    "slug": "new-builds-project-01",
    "title": "Project 01",
    "category": "new-builds",
    "categoryLabel": "New Builds",
    "location": "Hampshire & Surrey",
    "cover": "/projects/new-builds/project-01/cover.webp",
    "images": [
      "/projects/new-builds/project-01/cover.webp",
      "/projects/new-builds/project-01/01.webp"
    ]
  },
  {
    "slug": "new-builds-project-02",
    "title": "Project 02",
    "category": "new-builds",
    "categoryLabel": "New Builds",
    "location": "Hampshire & Surrey",
    "cover": "/projects/new-builds/project-02/cover.webp",
    "images": [
      "/projects/new-builds/project-02/cover.webp",
      "/projects/new-builds/project-02/01.webp",
      "/projects/new-builds/project-02/02.webp",
      "/projects/new-builds/project-02/03.webp",
      "/projects/new-builds/project-02/04.webp",
      "/projects/new-builds/project-02/05.webp",
      "/projects/new-builds/project-02/06.webp",
      "/projects/new-builds/project-02/07.webp"
    ]
  },
  {
    "slug": "new-builds-project-03",
    "title": "Project 03",
    "category": "new-builds",
    "categoryLabel": "New Builds",
    "location": "Hampshire & Surrey",
    "cover": "/projects/new-builds/project-03/cover.webp",
    "images": [
      "/projects/new-builds/project-03/cover.webp",
      "/projects/new-builds/project-03/01.webp",
      "/projects/new-builds/project-03/02.webp",
      "/projects/new-builds/project-03/03.webp",
      "/projects/new-builds/project-03/04.webp",
      "/projects/new-builds/project-03/05.webp",
      "/projects/new-builds/project-03/06.webp",
      "/projects/new-builds/project-03/07.webp",
      "/projects/new-builds/project-03/08.webp"
    ]
  },
  {
    "slug": "renovations-project-01",
    "title": "Project 01",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-01/cover.webp",
    "images": [
      "/projects/renovations/project-01/cover.webp",
      "/projects/renovations/project-01/01.webp",
      "/projects/renovations/project-01/02.webp",
      "/projects/renovations/project-01/03.webp",
      "/projects/renovations/project-01/04.webp",
      "/projects/renovations/project-01/05.webp",
      "/projects/renovations/project-01/06.webp",
      "/projects/renovations/project-01/07.webp",
      "/projects/renovations/project-01/08.webp",
      "/projects/renovations/project-01/09.webp",
      "/projects/renovations/project-01/10.webp",
      "/projects/renovations/project-01/11.webp",
      "/projects/renovations/project-01/12.webp"
    ]
  }
] as const;
