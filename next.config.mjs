/** @type {import('next').NextConfig} */

// The site is deployed to GitHub Pages as a project site served from a
// subpath (https://cameronmd.github.io/portfolio-cameronmd/). Production
// builds are statically exported to `out/` with that basePath so assets and
// links resolve under the subpath; the dev server stays at the root.
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/portfolio-cameronmd" : "",
  // GitHub Pages has no image optimisation server, so serve images as-is.
  images: { unoptimized: true },
  // Emit directory-style URLs (foo/index.html) that GitHub Pages serves cleanly.
  trailingSlash: true,
};

export default nextConfig;
