import { defineCollection, z } from "astro:content";

const imageSchema = z.object({
  src: z.string(),
  caption: z.string().optional(),
  licenseId: z.string().optional(),
});

const sourceSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export const collections = {
  kinobetreiber: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),

      images: z.array(imageSchema).optional(),

      table: z.record(z.string()).optional(),

      sources: z.array(sourceSchema).optional(),

      licenses: z.array(sourceSchema).optional(),
    }),
  }),

  kinos: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),

      address: z.string().optional(),
      years: z.string().optional(),

      images: z.array(imageSchema).optional(),

      table: z.record(z.string()).optional(),

      sources: z.array(sourceSchema).optional(),

      licenses: z.array(sourceSchema).optional(),
    }),
  }),
};
