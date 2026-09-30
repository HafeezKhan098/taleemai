import type { MetadataRoute } from 'next';

const baseUrl = 'https://taleemai-mu.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '/',
        '/scholarships',
        '/study-after-matric',
        '/colleges',
        '/careers',
        '/universities',
        '/tests',
        '/abroad',
        '/skills',
        '/balochistan',
        '/bbise',
        '/mentor',
        '/contact',
        '/privacy',
        '/ur',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));
}