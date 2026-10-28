import { getCollection } from 'astro:content';

const recientes = <T extends { data: { fecha: Date } }>(a: T, b: T) => b.data.fecha.getTime() - a.data.fecha.getTime();

export async function estudios() {
  return (await getCollection('estudios', ({ data }) => !data.borrador)).sort(recientes);
}
export async function fotos() {
  return (await getCollection('fotos')).sort(recientes);
}
export async function videos() {
  return (await getCollection('videos')).sort(recientes);
}
export const fechaLarga = (f: Date) =>
  f.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
