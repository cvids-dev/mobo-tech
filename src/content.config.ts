import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categories = [
  'inteligencia-artificial',
  'hardware',
  'maker-diy',
  'reaproveitamento',
  'casa-inteligente',
  'linux-sistemas',
  'redes-seguranca',
  'celulares-gadgets',
  'ciencia-inovacao',
  'tutoriais-guias',
] as const;

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    category: z.enum(categories),
    author: z.string().default('MOBO TECH'),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { articles };
