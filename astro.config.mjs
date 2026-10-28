// @ts-check
import { defineConfig } from 'astro/config';

// SITE y BASE los define automáticamente el flujo de GitHub Actions.
// - Repositorio "usuario.github.io" o dominio propio → BASE = "/"
// - Cualquier otro repositorio (p. ej. "territorio-abierto") → BASE = "/territorio-abierto"
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
});
