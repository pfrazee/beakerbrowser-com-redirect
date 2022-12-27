/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination:
          'https://github.com/beakerbrowser/beaker/blob/master/archive-notice.md',
        permanent: true,
      },
      {
        source: '/:path*',
        destination:
          'https://github.com/beakerbrowser/beaker/blob/master/archive-notice.md',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
