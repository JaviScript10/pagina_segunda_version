import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ciberbyte.cl'),
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
  alternates: {
    canonical: 'https://ciberbyte.cl',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://ciberbyte.cl',
    siteName: 'CiberByte',
    title: 'CiberByte - Soluciones Digitales Profesionales',
    description:
      'Desarrollo web, apps y e-commerce en Chile. Diseño moderno, carga rápida y optimización SEO.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CiberByte - Soluciones Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CiberByte - Soluciones Digitales Profesionales',
    description: 'Desarrollo web, apps y e-commerce en Chile.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },  // ← NUEVO: SVG primero
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
