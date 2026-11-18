import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    description: z.string(),
    order: z.number(),
    kind: z.enum(['product', 'experience']),
    years: z.string(),
    // One honest line about stage. Shown on the work index and in the flow header.
    stage: z.string(),
    facts: z.array(z.object({ label: z.string(), value: z.string(), href: z.string().optional() })),
    // The four cells of the flow. `open` is set in red: what is not known or not measured.
    flow: z
      .object({ noticed: z.string(), thought: z.string(), built: z.string(), now: z.string(), open: z.string() })
      .optional(),
    // The evidence ledger at the foot of a case study.
    evidence: z.object({
      did: z.array(z.string()),
      supports: z.array(z.string()).default([]),
      measured: z.array(z.string()),
      open: z.array(z.string()),
    }),
    supportsLabel: z.string().default('What the product supports'),
    demo: z.enum(['meddraft', 'kuchu', 'central']).optional(),
    photo: z.enum(['cafe-menu']).optional(),
  }),
});

export const collections = { work };
