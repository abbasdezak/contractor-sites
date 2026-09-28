import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` emits plain HTML/CSS/JS into `out/`,
  // deployable to any static host (Netlify, Vercel, Cloudflare Pages, S3...).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
