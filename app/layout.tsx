import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nutricion-inteligente.pages.dev'),
  title: {
    default: 'Nutrición Inteligente',
    template: '%s · Nutrición Inteligente',
  },
  description:
    'Centro oficial de información, aprendizaje y soporte de Nutrición Inteligente para Android.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Nutrición Inteligente',
    title: 'Nutrición Inteligente',
    description:
      'Registra tus comidas, comprende tu progreso y aprende a tomar decisiones con más contexto.',
    images: [
      {
        url: '/og-nutricion-inteligente.png',
        width: 1200,
        height: 630,
        alt: 'Nutrición Inteligente: entiende lo que comes, sin complicarlo.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutrición Inteligente',
    description:
      'Registra tus comidas, comprende tu progreso y aprende a tomar decisiones con más contexto.',
    images: ['/og-nutricion-inteligente.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
