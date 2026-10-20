# Adding project images

Keep authentic screenshots and diagrams in `public/projects/<project-slug>/`. Prefer WebP for large screenshots and PNG for diagrams; export at roughly 1200–1600 px wide and remove private data.

Add media only after the file exists. In `src/lib/portfolio-data.ts`, update the matching project:

```ts
{
  slug: "traffiq",
  coverImage: "/projects/traffiq/cover.webp",
  coverAlt: "TraffIQ SUMO intersection simulation dashboard",
  coverFit: "contain",
  gallery: [
    {
      src: "/projects/traffiq/simulation.png",
      alt: "SUMO simulation showing the tested intersection",
      caption: "The simulation environment used for policy comparisons.",
    },
  ],
}
```

Use `coverFit: "contain"` for dashboards or diagrams whose edges matter; use `"cover"` for images that can be cropped. If the fields are absent, the existing colored icon card remains unchanged. Never add a path before its file exists, and do not use generated or third-party images as if they were project evidence.
