# Territorio Abierto

Sitio personal de **Andrés Felipe Trujillo Angel**: estudios, fotografía y videos sobre territorio, ríos y biodiversidad.
Hecho con [Astro](https://astro.build) y publicado gratis en GitHub Pages.

---

## Cómo publicar contenido nuevo

Todo el contenido son archivos de texto (Markdown). Copia una plantilla de la carpeta `plantillas/`, llénala y guárdala en su carpeta.

| Quiero publicar… | Copia la plantilla | Guárdala en | Imágenes en |
|---|---|---|---|
| Un estudio | `plantillas/estudio.md` | `src/content/estudios/` | `public/estudios/` |
| Una foto | `plantillas/foto.md` | `src/content/fotos/` | `public/fotos/` |
| Un video | `plantillas/video.md` | `src/content/videos/` | (YouTube) |

- El **nombre del archivo** es la dirección de la página: `rio-magdalena.md` → `/estudios/rio-magdalena/`. Usa minúsculas, sin tildes ni espacios.
- Las imágenes se referencian empezando con `/`, por ejemplo `imagen: /fotos/garza.jpg`.
- Reduce las fotos antes de subirlas (máx. ~2000 px de ancho, menos de 1 MB).
- Un estudio con `borrador: true` no se publica.
- El estudio con `destacado: true` aparece grande en la página de inicio.

### Desde el navegador (sin instalar nada)

1. En GitHub, entra a la carpeta (p. ej. `src/content/fotos/`).
2. **Add file › Create new file** (para el `.md`) o **Add file › Upload files** (para imágenes).
3. Pega el contenido, haz clic en **Commit changes**.
4. En 1–2 minutos el sitio se actualiza solo (puedes ver el avance en la pestaña **Actions**).

### Desde tu computador

```bash
npm install        # solo la primera vez
npm run dev        # vista previa en http://localhost:4321
git add . && git commit -m "Nuevo estudio" && git push
```

## Datos generales

Nombre, presentación y enlaces de YouTube/Instagram: `src/config.ts`.
Colores y tipografías: `src/styles/global.css` (variables al inicio).

## Dominio propio (territorioabierto.com)

1. Compra el dominio.
2. Crea el archivo `public/CNAME` con una sola línea: `territorioabierto.com`
3. En tu proveedor de dominio crea los registros DNS que indica GitHub: *Settings › Pages › Custom domain*.
4. Activa **Enforce HTTPS**.
