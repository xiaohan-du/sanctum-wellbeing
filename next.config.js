/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/lymphatic-drainage-massage-cardiff',
        destination: '/lymphatic-drainage',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
