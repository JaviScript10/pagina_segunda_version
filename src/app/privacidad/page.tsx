import type { Metadata } from 'next';
import PaginaLegal, { CorreoContacto, type SeccionLegal } from '@/components/PaginaLegal';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  alternates: { canonical: '/privacidad' },
};

// Solo lo que el sitio hace de verdad: Vercel Analytics sin cookies y botones que abren WhatsApp
const SECCIONES: SeccionLegal[] = [
  {
    titulo: 'Quién responde',
    contenido: (
      <p>
        Este sitio es de CiberByte y yo respondo por él. Cualquier consulta sobre tus datos, escríbeme a <CorreoContacto />.
      </p>
    ),
  },
  {
    titulo: 'Lo que el sitio no guarda',
    contenido: (
      <>
        <p>El sitio no tiene cuentas de usuario ni formularios que guarden datos.</p>
        <p>
          El chat y los botones de WhatsApp solo arman un mensaje y abren WhatsApp. Lo que escribes ahí no pasa por ningún servidor
          mío ni queda guardado en el sitio: se envía recién cuando tú lo mandas desde WhatsApp.
        </p>
      </>
    ),
  },
  {
    titulo: 'Si me escribes',
    contenido: (
      <>
        <p>
          Si me escribes por WhatsApp o por correo, recibo lo que me mandas: tu nombre, tu número o tu correo y lo que me cuentes de
          tu proyecto. Lo uso solo para responderte, cotizar y hacer el trabajo si me lo encargas. No lo vendo ni lo comparto.
        </p>
        <p>WhatsApp es un servicio de Meta y se rige por su propia política de privacidad.</p>
      </>
    ),
  },
  {
    titulo: 'Estadísticas de visitas',
    contenido: (
      <>
        <p>
          Para saber cuántas personas visitan el sitio uso Vercel Web Analytics, que no usa cookies. Registra datos generales de
          cada visita: la página, el sitio desde el que llegaste, la ubicación aproximada (país, región y ciudad), el sistema
          operativo, el navegador y el tipo de dispositivo.
        </p>
        <p>
          No guarda tu dirección IP ni te identifica. Para contar visitas usa un identificador calculado a partir de la conexión,
          que se descarta a las 24 horas. Yo solo veo totales.
        </p>
      </>
    ),
  },
  {
    titulo: 'Alojamiento',
    contenido: (
      <p>
        El sitio está alojado en Vercel. Como cualquier servidor, procesa datos técnicos de la conexión, como tu dirección IP, para
        poder mostrarte las páginas.
      </p>
    ),
  },
  {
    titulo: 'Tus derechos',
    contenido: (
      <p>
        Puedes pedirme ver, corregir o borrar lo que me hayas enviado por WhatsApp o por correo. Escríbeme a <CorreoContacto />.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <PaginaLegal
      titulo="Política de privacidad"
      bajada="Qué datos recibe este sitio y qué hago con ellos. La versión corta: casi ninguno."
      secciones={SECCIONES}
    />
  );
}
