import { MetadataRoute } from 'next';
import { getArticleSlugs } from '../lib/api';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zarabianie-neon.vercel.app';
  
  const slugs = getArticleSlugs();
  const articles = slugs.map((slug) => ({
    url: `${baseUrl}/artykul/${slug.replace(/\.md$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articles,
  ];
}
