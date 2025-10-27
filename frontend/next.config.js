/**
 * Next.js config with a rewrite so frontend can call /api/* -> http://localhost:4000/*
 */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*'
      }
    ]
  }
}
