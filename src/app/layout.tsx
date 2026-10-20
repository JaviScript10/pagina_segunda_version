import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Archivo, Atkinson_Hyperlegible } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL } from '@/lib/site';
import ChatDock from '@/components/ChatDock';

// Títulos: Archivo variable con eje de ancho (rotulación de micros y ascensores)
const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

// Texto: Atkinson Hyperlegible 400/700
const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-atkinson',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#E9EEF1',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CiberByte - Soluciones Digitales Profesionales en Chile',
    template: '%s | CiberByte',
  },
  description:
    'Desarrollo web profesional en Chile: Landing pages, sitios corporativos, E-commerce, Apps móviles y soluciones digitales. Diseño moderno, carga ultra-rápida y SEO optimizado.',
  keywords: [
    'desarrollo web chile',
    'páginas web',
    'diseño web',
    'e-commerce',
    'apps móviles',
    'landing pages',
    'sitios corporativos',
    'desarrollo software',
    'ciberbyte',
    'soluciones digitales',
  ],
  authors: [{ name: 'CiberByte' }],
  creator: 'CiberByte',
  publisher: 'CiberByte',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    siteName: 'CiberByte',
    title: 'CiberByte: páginas web que trabajan por tu negocio',
    description: 'Desarrollo a medida desde Valparaíso, para todo Chile. Sin plantillas y sin intermediarios.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CiberByte. Páginas web que trabajan por tu negocio. Ilustración de un cerro de Valparaíso.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CiberByte: páginas web que trabajan por tu negocio',
    description: 'Desarrollo a medida desde Valparaíso, para todo Chile. Sin plantillas y sin intermediarios.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${archivo.variable} ${atkinson.variable}`}>
      <body className="antialiased">
        {children}
        <ChatDock />
        <Analytics /> {/* <-- 2. Coloca el componente de analíticas aquí */}
      </body>
    </html>
  );
}