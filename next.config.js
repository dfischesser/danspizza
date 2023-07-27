/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.danspizza.dev/:path*',
        permanent: true,
      },
    ]
  },
}
 
module.exports = nextConfig