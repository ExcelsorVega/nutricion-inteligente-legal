import type { MetadataRoute } from 'next';

const routes = ['', '/aprende', '/soporte', '/beta'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-24T00:00:00+02:00');

  return routes.map((route) => ({
    url: `https://nutricion-inteligente.excelsorvega.chatgpt.site${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
