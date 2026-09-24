import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/privacidad',
        destination: 'https://excelsorvega.github.io/nutricion-inteligente-legal/',
        permanent: true,
      },
      {
        source: '/eliminar-cuenta',
        destination: 'https://excelsorvega.github.io/nutricion-inteligente-legal/account_deletion.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
