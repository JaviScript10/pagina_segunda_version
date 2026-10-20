import type { Metadata } from 'next';
import PaginaLegal, { CorreoContacto, type SeccionLegal } from '@/components/PaginaLegal';

export const metadata: Metadata = {
  title: 'Política de cookies',
  alternates: { canonical: '/cookies' },
};

const SECCIONES: SeccionLegal[] = [
  {
    titulo: 'Este sitio no usa cookies',
    contenido: (
      <p>
        No uso cookies propias, de publicidad ni de seguimiento. Tampoco guardo nada en tu navegador. Por eso no vas a ver un aviso
        de cookies.
      </p>
    ),
  },
  {
    titulo: 'Estadísticas sin cookies',
    contenido: (
      <p>
        Cuento las visitas con Vercel Web Analytics, que funciona sin cookies. Qué registra y por cuánto tiempo está en la{' '}
        <a
          href="/privacidad"
          className="font-bold text-cerro underline decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:text-tinta focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cerro"
        >
          política de privacidad
        </a>
        .
      </p>
    ),
  },
  {
    titulo: 'Al abrir WhatsApp',
    contenido: (
      <p>
        Cuando tocas un botón de WhatsApp, sales de este sitio. WhatsApp puede usar sus propias cookies según la política de Meta,
        que no depende de mí.
      </p>
    ),
  },
  {
    titulo: 'Contacto',
    contenido: (
      <p>
        Si tienes dudas sobre esta política, escríbeme a <CorreoContacto />.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return <PaginaLegal titulo="Política de cookies" bajada="Corta, porque no hay mucho que contar." secciones={SECCIONES} />;
}
