import { projects } from '../data/projects';

export default function sitemap() {
  const base = 'https://your-domain.example';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/skills`, lastModified },
    { url: `${base}/projects`, lastModified },
    ...projects.map(p => ({ url: `${base}/projects/${p.id}`, lastModified }))
  ];
}

