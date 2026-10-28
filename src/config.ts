// ─────────────────────────────────────────────
//  Datos generales del sitio — edita aquí
// ─────────────────────────────────────────────
export const SITIO = {
  nombre: 'Territorio Abierto',
  autor: 'Andrés Felipe Trujillo Angel',
  descripcion:
    'Estudios, fotografía y videos sobre ríos, paisajes y biodiversidad, con mapas y datos abiertos.',
  presentacion:
    'Estudios, fotografía y videos sobre ríos, paisajes y biodiversidad, por Andrés Felipe Trujillo Angel, ingeniero agrícola especialista en hidroinformática.',
  eslogan: 'Ciencia del paisaje, a cielo abierto.',
  coordenadas: '2°55′N · 75°17′O — CUADERNO DE CAMPO',
  redes: {
    youtube: '', // p. ej. 'https://www.youtube.com/@territorioabierto'
    instagram: '', // p. ej. 'https://www.instagram.com/territorioabierto'
  },
};

/** Antepone la ruta base del sitio (necesario en GitHub Pages). */
export function url(ruta: string): string {
  if (/^https?:\/\//.test(ruta)) return ruta;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${ruta.replace(/^\//, '')}`;
}
