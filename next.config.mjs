/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
};

export default nextConfig;
