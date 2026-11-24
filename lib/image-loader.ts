// Image loader for static hosting (GitHub Pages): there is no image server, so photos are
// served as they are, prefixed with the site's base path (e.g. "/house-of-interio").

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src, width }: { src: string; width: number }) {
  return `${base}${src}?w=${width}`;
}

/** Prefix a public-folder path with the site's base path (for non-<Image> uses). */
export function asset(path: string) {
  return `${base}${path}`;
}
