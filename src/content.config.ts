import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada estudio es un archivo .md en src/content/estudios/
const estudios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/estudios' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    tema: z.string(), // HIDROLOGÍA, COBERTURAS, BIODIVERSIDAD…
    lugar: z.string(),
    periodo: z.string().optional(),
    area: z.string().optional(),
    fuentes: z.string().optional(),
    portada: z.string().optional(), // ruta dentro de /public, p. ej. /estudios/atrato.jpg
    estado: z.enum(['publicado', 'en curso']).default('publicado'),
    destacado: z.boolean().default(false),
    borrador: z.boolean().default(false), // true = no se publica
  }),
});

// Cada foto es un archivo .md (solo encabezado) en src/content/fotos/
const fotos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fotos' }),
  schema: z.object({
    titulo: z.string(),
    imagen: z.string().optional(), // ruta dentro de /public, p. ej. /fotos/garza.jpg
    lugar: z.string(),
    coordenadas: z.string().optional(),
    fecha: z.coerce.date(),
    nota: z.string().optional(),
  }),
});

// Cada video es un archivo .md (solo encabezado) en src/content/videos/
const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    titulo: z.string(),
    tipo: z.enum(['original', 'ia']),
    youtube: z.string().optional(), // ID del video, p. ej. 'dQw4w9WgXcQ'
    fecha: z.coerce.date(),
    descripcion: z.string().optional(),
  }),
});

export const collections = { estudios, fotos, videos };
