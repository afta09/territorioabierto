// @ts-check
import { defineConfig } from 'astro/config';

// SITE y BASE los define automáticamente el flujo de GitHub Actions.
// - Repositorio "usuario.github.io" o dominio propio → BASE = "/"
// - Cualquier otro repositorio (p. ej. "territorioabierto") → BASE = "/territorioabierto"
const BASE = process.env.BASE || '/';

/** Al terminar la compilación, antepone la ruta base a las imágenes y enlaces
 *  escritos en los estudios (Markdown) que apuntan a /estudios/ o /fotos/. */
function rutasConBase() {
  return {
    name: 'rutas-con-base',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const prefijo = BASE.replace(/\/$/, '');
        if (!prefijo) return;
        const fs = await import('node:fs/promises');
        const path = await import('node:path');
        const { fileURLToPath } = await import('node:url');
        const raiz = fileURLToPath(dir);
        const archivos = await fs.readdir(raiz, { recursive: true });
        for (const rel of archivos.filter((f) => f.endsWith('.html'))) {
          const ruta = path.join(raiz, rel);
          const html = await fs.readFile(ruta, 'utf8');
          const nuevo = html.replace(/(src|href)="\/(estudios|fotos|marca)\//g, `$1="${prefijo}/$2/`);
          if (nuevo !== html) await fs.writeFile(ruta, nuevo);
        }
      },
    },
  };
}

export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [rutasConBase()],
});
