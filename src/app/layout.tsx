import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'; 
import { SITE_URL } from '@/lib/site';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    title: 'CiberByte - Soluciones Digitales Profesionales',
    description:
      'Desarrollo web, apps y e-commerce en Chile. Diseño moderno, carga rápida y optimización SEO.',
    // Falta /og-image.jpg (1200x630). Agregar `images` cuando exista.
  },
  twitter: {
    // Volver a 'summary_large_image' cuando exista la imagen OG.
    card: 'summary',
    title: 'CiberByte - Soluciones Digitales Profesionales',
    description: 'Desarrollo web, apps y e-commerce en Chile.',
  },
  icons: {
    // Faltan favicon.ico, favicon-16x16.png, favicon-32x32.png y apple-touch-icon.png.
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
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
        <WhatsAppButton />
        <Analytics /> {/* <-- 2. Coloca el componente de analíticas aquí */}
      </body>
    </html>
  );
}