export type ProjectCategory = "extensions" | "renovations" | "new-builds";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
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
      "/projects/extensions/project-01/04.webp"
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
      "/projects/renovations/project-01/03.webp"
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
    "slug": "extensions-project-02",
    "title": "Project 02",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-02/cover.webp",
    "images": [
      "/projects/extensions/project-02/cover.webp",
      "/projects/extensions/project-02/01.webp"
    ]
  },
  {
    "slug": "renovations-project-02",
    "title": "Project 02",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-02/cover.webp",
    "images": [
      "/projects/renovations/project-02/cover.webp",
      "/projects/renovations/project-02/01.webp"
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
    "slug": "extensions-project-03",
    "title": "Project 03",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-03/cover.webp",
    "images": [
      "/projects/extensions/project-03/cover.webp",
      "/projects/extensions/project-03/01.webp",
      "/projects/extensions/project-03/02.webp"
    ]
  },
  {
    "slug": "renovations-project-03",
    "title": "Project 03",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-03/cover.webp",
    "images": [
      "/projects/renovations/project-03/cover.webp",
      "/projects/renovations/project-03/01.webp",
      "/projects/renovations/project-03/02.webp",
      "/projects/renovations/project-03/03.webp",
      "/projects/renovations/project-03/04.webp",
      "/projects/renovations/project-03/05.webp"
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
    "slug": "extensions-project-04",
    "title": "Project 04",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-04/cover.webp",
    "images": [
      "/projects/extensions/project-04/cover.webp",
      "/projects/extensions/project-04/01.webp",
      "/projects/extensions/project-04/02.webp",
      "/projects/extensions/project-04/03.webp",
      "/projects/extensions/project-04/04.webp",
      "/projects/extensions/project-04/05.webp"
    ]
  },
  {
    "slug": "renovations-project-04",
    "title": "Project 04",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-04/cover.webp",
    "images": [
      "/projects/renovations/project-04/cover.webp",
      "/projects/renovations/project-04/01.webp"
    ]
  },
  {
    "slug": "extensions-project-05",
    "title": "Project 05",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-05/cover.webp",
    "images": [
      "/projects/extensions/project-05/cover.webp",
      "/projects/extensions/project-05/01.webp",
      "/projects/extensions/project-05/02.webp",
      "/projects/extensions/project-05/03.webp"
    ]
  },
  {
    "slug": "renovations-project-05",
    "title": "Project 05",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-05/cover.webp",
    "images": [
      "/projects/renovations/project-05/cover.webp",
      "/projects/renovations/project-05/01.webp",
      "/projects/renovations/project-05/02.webp"
    ]
  },
  {
    "slug": "extensions-project-06",
    "title": "Project 06",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-06/cover.webp",
    "images": [
      "/projects/extensions/project-06/cover.webp",
      "/projects/extensions/project-06/01.webp"
    ]
  },
  {
    "slug": "renovations-project-06",
    "title": "Project 06",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-06/cover.webp",
    "images": [
      "/projects/renovations/project-06/cover.webp",
      "/projects/renovations/project-06/01.webp",
      "/projects/renovations/project-06/02.webp",
      "/projects/renovations/project-06/03.webp",
      "/projects/renovations/project-06/04.webp"
    ]
  },
  {
    "slug": "extensions-project-07",
    "title": "Project 07",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-07/cover.webp",
    "images": [
      "/projects/extensions/project-07/cover.webp",
      "/projects/extensions/project-07/01.webp",
      "/projects/extensions/project-07/02.webp",
      "/projects/extensions/project-07/03.webp",
      "/projects/extensions/project-07/04.webp"
    ]
  },
  {
    "slug": "renovations-project-07",
    "title": "Project 07",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-07/cover.webp",
    "images": [
      "/projects/renovations/project-07/cover.webp",
      "/projects/renovations/project-07/01.webp"
    ]
  },
  {
    "slug": "extensions-project-08",
    "title": "Project 08",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-08/cover.webp",
    "images": [
      "/projects/extensions/project-08/cover.webp",
      "/projects/extensions/project-08/01.webp",
      "/projects/extensions/project-08/02.webp",
      "/projects/extensions/project-08/03.webp"
    ]
  },
  {
    "slug": "renovations-project-08",
    "title": "Project 08",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-08/cover.webp",
    "images": [
      "/projects/renovations/project-08/cover.webp",
      "/projects/renovations/project-08/01.webp",
      "/projects/renovations/project-08/02.webp",
      "/projects/renovations/project-08/03.webp"
    ]
  },
  {
    "slug": "extensions-project-09",
    "title": "Project 09",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-09/cover.webp",
    "images": [
      "/projects/extensions/project-09/cover.webp",
      "/projects/extensions/project-09/01.webp",
      "/projects/extensions/project-09/02.webp",
      "/projects/extensions/project-09/03.webp",
      "/projects/extensions/project-09/04.webp",
      "/projects/extensions/project-09/05.webp",
      "/projects/extensions/project-09/06.webp",
      "/projects/extensions/project-09/07.webp",
      "/projects/extensions/project-09/08.webp"
    ]
  },
  {
    "slug": "renovations-project-09",
    "title": "Project 09",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-09/cover.webp",
    "images": [
      "/projects/renovations/project-09/cover.webp",
      "/projects/renovations/project-09/01.webp"
    ]
  },
  {
    "slug": "extensions-project-10",
    "title": "Project 10",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-10/cover.webp",
    "images": [
      "/projects/extensions/project-10/cover.webp",
      "/projects/extensions/project-10/01.webp",
      "/projects/extensions/project-10/02.webp",
      "/projects/extensions/project-10/03.webp",
      "/projects/extensions/project-10/04.webp",
      "/projects/extensions/project-10/05.webp",
      "/projects/extensions/project-10/06.webp",
      "/projects/extensions/project-10/07.webp",
      "/projects/extensions/project-10/08.webp"
    ]
  },
  {
    "slug": "renovations-project-10",
    "title": "Project 10",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-10/cover.webp",
    "images": [
      "/projects/renovations/project-10/cover.webp",
      "/projects/renovations/project-10/01.webp"
    ]
  },
  {
    "slug": "extensions-project-11",
    "title": "Project 11",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-11/cover.webp",
    "images": [
      "/projects/extensions/project-11/cover.webp",
      "/projects/extensions/project-11/01.webp",
      "/projects/extensions/project-11/02.webp",
      "/projects/extensions/project-11/03.webp",
      "/projects/extensions/project-11/04.webp"
    ]
  },
  {
    "slug": "renovations-project-11",
    "title": "Project 11",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-11/cover.webp",
    "images": [
      "/projects/renovations/project-11/cover.webp",
      "/projects/renovations/project-11/01.webp",
      "/projects/renovations/project-11/02.webp",
      "/projects/renovations/project-11/03.webp",
      "/projects/renovations/project-11/04.webp"
    ]
  },
  {
    "slug": "extensions-project-12",
    "title": "Project 12",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-12/cover.webp",
    "images": [
      "/projects/extensions/project-12/cover.webp",
      "/projects/extensions/project-12/01.webp",
      "/projects/extensions/project-12/02.webp",
      "/projects/extensions/project-12/03.webp",
      "/projects/extensions/project-12/04.webp"
    ]
  },
  {
    "slug": "renovations-project-12",
    "title": "Project 12",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-12/cover.webp",
    "images": [
      "/projects/renovations/project-12/cover.webp",
      "/projects/renovations/project-12/01.webp"
    ]
  },
  {
    "slug": "extensions-project-13",
    "title": "Project 13",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-13/cover.webp",
    "images": [
      "/projects/extensions/project-13/cover.webp",
      "/projects/extensions/project-13/01.webp"
    ]
  },
  {
    "slug": "renovations-project-13",
    "title": "Project 13",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-13/cover.webp",
    "images": [
      "/projects/renovations/project-13/cover.webp",
      "/projects/renovations/project-13/01.webp",
      "/projects/renovations/project-13/02.webp"
    ]
  },
  {
    "slug": "extensions-project-14",
    "title": "Project 14",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-14/cover.webp",
    "images": [
      "/projects/extensions/project-14/cover.webp",
      "/projects/extensions/project-14/01.webp",
      "/projects/extensions/project-14/02.webp",
      "/projects/extensions/project-14/03.webp",
      "/projects/extensions/project-14/04.webp",
      "/projects/extensions/project-14/05.webp",
      "/projects/extensions/project-14/06.webp",
      "/projects/extensions/project-14/07.webp"
    ]
  },
  {
    "slug": "renovations-project-14",
    "title": "Project 14",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-14/cover.webp",
    "images": [
      "/projects/renovations/project-14/cover.webp",
      "/projects/renovations/project-14/01.webp",
      "/projects/renovations/project-14/02.webp",
      "/projects/renovations/project-14/03.webp",
      "/projects/renovations/project-14/04.webp",
      "/projects/renovations/project-14/05.webp",
      "/projects/renovations/project-14/06.webp",
      "/projects/renovations/project-14/07.webp",
      "/projects/renovations/project-14/08.webp",
      "/projects/renovations/project-14/09.webp",
      "/projects/renovations/project-14/10.webp",
      "/projects/renovations/project-14/11.webp",
      "/projects/renovations/project-14/12.webp"
    ]
  },
  {
    "slug": "extensions-project-15",
    "title": "Project 15",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-15/cover.webp",
    "images": [
      "/projects/extensions/project-15/cover.webp",
      "/projects/extensions/project-15/01.webp",
      "/projects/extensions/project-15/02.webp"
    ]
  },
  {
    "slug": "renovations-project-15",
    "title": "Project 15",
    "category": "renovations",
    "categoryLabel": "Renovations",
    "location": "Hampshire & Surrey",
    "cover": "/projects/renovations/project-15/cover.webp",
    "images": [
      "/projects/renovations/project-15/cover.webp",
      "/projects/renovations/project-15/01.webp",
      "/projects/renovations/project-15/02.webp"
    ]
  },
  {
    "slug": "extensions-project-16",
    "title": "Project 16",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-16/cover.webp",
    "images": [
      "/projects/extensions/project-16/cover.webp",
      "/projects/extensions/project-16/01.webp"
    ]
  },
  {
    "slug": "extensions-project-17",
    "title": "Project 17",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-17/cover.webp",
    "images": [
      "/projects/extensions/project-17/cover.webp",
      "/projects/extensions/project-17/01.webp"
    ]
  },
  {
    "slug": "extensions-project-18",
    "title": "Project 18",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-18/cover.webp",
    "images": [
      "/projects/extensions/project-18/cover.webp",
      "/projects/extensions/project-18/01.webp",
      "/projects/extensions/project-18/02.webp",
      "/projects/extensions/project-18/03.webp"
    ]
  },
  {
    "slug": "extensions-project-19",
    "title": "Project 19",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-19/cover.webp",
    "images": [
      "/projects/extensions/project-19/cover.webp",
      "/projects/extensions/project-19/01.webp"
    ]
  },
  {
    "slug": "extensions-project-20",
    "title": "Project 20",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-20/cover.webp",
    "images": [
      "/projects/extensions/project-20/cover.webp",
      "/projects/extensions/project-20/01.webp"
    ]
  },
  {
    "slug": "extensions-project-21",
    "title": "Project 21",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-21/cover.webp",
    "images": [
      "/projects/extensions/project-21/cover.webp",
      "/projects/extensions/project-21/01.webp"
    ]
  },
  {
    "slug": "extensions-project-22",
    "title": "Project 22",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-22/cover.webp",
    "images": [
      "/projects/extensions/project-22/cover.webp",
      "/projects/extensions/project-22/01.webp",
      "/projects/extensions/project-22/02.webp",
      "/projects/extensions/project-22/03.webp"
    ]
  },
  {
    "slug": "extensions-project-23",
    "title": "Project 23",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-23/cover.webp",
    "images": [
      "/projects/extensions/project-23/cover.webp",
      "/projects/extensions/project-23/01.webp",
      "/projects/extensions/project-23/02.webp",
      "/projects/extensions/project-23/03.webp",
      "/projects/extensions/project-23/04.webp",
      "/projects/extensions/project-23/05.webp",
      "/projects/extensions/project-23/06.webp"
    ]
  },
  {
    "slug": "extensions-project-24",
    "title": "Project 24",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-24/cover.webp",
    "images": [
      "/projects/extensions/project-24/cover.webp",
      "/projects/extensions/project-24/01.webp",
      "/projects/extensions/project-24/02.webp",
      "/projects/extensions/project-24/03.webp",
      "/projects/extensions/project-24/04.webp"
    ]
  },
  {
    "slug": "extensions-project-25",
    "title": "Project 25",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-25/cover.webp",
    "images": [
      "/projects/extensions/project-25/cover.webp",
      "/projects/extensions/project-25/01.webp"
    ]
  },
  {
    "slug": "extensions-project-26",
    "title": "Project 26",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-26/cover.webp",
    "images": [
      "/projects/extensions/project-26/cover.webp",
      "/projects/extensions/project-26/01.webp",
      "/projects/extensions/project-26/02.webp"
    ]
  },
  {
    "slug": "extensions-project-27",
    "title": "Project 27",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-27/cover.webp",
    "images": [
      "/projects/extensions/project-27/cover.webp",
      "/projects/extensions/project-27/01.webp",
      "/projects/extensions/project-27/02.webp",
      "/projects/extensions/project-27/03.webp",
      "/projects/extensions/project-27/04.webp",
      "/projects/extensions/project-27/05.webp"
    ]
  },
  {
    "slug": "extensions-project-28",
    "title": "Project 28",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-28/cover.webp",
    "images": [
      "/projects/extensions/project-28/cover.webp",
      "/projects/extensions/project-28/01.webp",
      "/projects/extensions/project-28/02.webp",
      "/projects/extensions/project-28/03.webp",
      "/projects/extensions/project-28/04.webp"
    ]
  },
  {
    "slug": "extensions-project-29",
    "title": "Project 29",
    "category": "extensions",
    "categoryLabel": "Extensions",
    "location": "Hampshire & Surrey",
    "cover": "/projects/extensions/project-29/cover.webp",
    "images": [
      "/projects/extensions/project-29/cover.webp",
      "/projects/extensions/project-29/01.webp"
    ]
  }
] as const;
