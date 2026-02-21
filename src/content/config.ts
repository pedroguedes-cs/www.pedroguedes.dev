import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: ({image}) => z.object({
      category: z.enum(["web", "cli", "other"]),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      repo: z.string().url().optional(),
      website: z.string().url().optional(),
      demo: z.string().url().optional(),
      featured: z.boolean().default(false),
      image: image()
    }),
});

const skills = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    svgPath: z.string(),
    category: z.enum(["frontend", "backend", "tools", "other"]),
  }),
});

export const collections = { projects, skills };
