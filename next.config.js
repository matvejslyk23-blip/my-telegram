/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Критично для Netlify!
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig