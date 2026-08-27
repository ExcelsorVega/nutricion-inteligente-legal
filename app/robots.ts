import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nutricion-inteligente.excelsorvega.chatgpt.site/sitemap.xml',
  };
}
