/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuração para IBM Carbon
  transpilePackages: [
    '@carbon/react',
    '@carbon/icons-react',
  ],
  
  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_APP_NAME: 'CX Operating System',
    NEXT_PUBLIC_APP_VERSION: '2.0.0',
  },
  
  // Configuração de imagens
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
