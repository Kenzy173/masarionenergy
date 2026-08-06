import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for plain web hosting (cPanel / Apache / Nginx / GitHub Pages).
  // `next build` emits the site into the `out/` folder.
  output: "export",
  // Emit each route as a directory with index.html (e.g. /about/index.html) so
  // shared hosts serve routes without needing rewrite rules.
  trailingSlash: true,
  // Static exports cannot run the image optimizer; all images are local and
  // already sized, so serve them as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
