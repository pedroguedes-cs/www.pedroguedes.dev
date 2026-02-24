import { defineCollection, z } from "astro:content";
import { PROJECT_CATEGORIES, SKILL_CATEGORIES, PROJECT_TAGS } from "./constants";


const projects = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
      category: z.enum(PROJECT_CATEGORIES),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.enum(PROJECT_TAGS)),
      repo: z.string().url().optional(),
      website: z.string().url().optional(),
      demo: z.string().optional(),
      featured: z.boolean(),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        })
      )
    }),
});

const skills = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    svgPath: z.string(),
    category: z.enum(SKILL_CATEGORIES),
  }),
});

export const collections = { projects, skills };
