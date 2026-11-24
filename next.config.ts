import type { NextConfig } from "next";

// On GitHub Pages the site lives under /<repo-name>. The deploy workflow passes that
// prefix in NEXT_PUBLIC_BASE_PATH; locally it is empty, so the site runs at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS files into ./out that any static host can serve.
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
