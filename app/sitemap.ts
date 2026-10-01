import type { MetadataRoute } from 'next';

const base = 'https://taleemai-mu.vercel.app';
const paths = ['', '/scholarships', '/study-after-matric', '/colleges', '/careers', '/universities', '/tests', '/abroad', '/skills', '/bbise', '/mentor', '/contact', '/privacy', '/ur', '/get-online'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
