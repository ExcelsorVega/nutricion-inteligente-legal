import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nutricion-inteligente.excelsorvega.chatgpt.site'),
  title: {
    default: 'Nutrición Inteligente',
    template: '%s · Nutrición Inteligente',
  },
  description:
    'Centro oficial de información, aprendizaje y soporte de Nutrición Inteligente para Android.',
  icons: {
    icon: '/favicon-brote-sereno.png',
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
        url: '/og-brote-sereno.png',
        width: 1024,
        height: 500,
        alt: 'Nutrición Inteligente: hoy vamos paso a paso.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutrición Inteligente',
    description:
      'Registra tus comidas, comprende tu progreso y aprende a tomar decisiones con más contexto.',
    images: ['/og-brote-sereno.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
