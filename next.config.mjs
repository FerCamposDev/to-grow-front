/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      }
    ]
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
