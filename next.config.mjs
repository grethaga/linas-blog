/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true, // permanent (301) oder temporär (302)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://external-api.com/:path*", // externe API
      },
    ];
  },
};
