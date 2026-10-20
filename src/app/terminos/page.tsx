import type { Metadata } from 'next';
import PaginaLegal, { CorreoContacto, type SeccionLegal } from '@/components/PaginaLegal';
import { GUARANTEE_TERM, HOSTING_TERM, PAYMENT_TERM } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  alternates: { canonical: '/terminos' },
};

const SECCIONES: SeccionLegal[] = [
  {
    titulo: 'Aceptación',
    contenido: <p>Estos términos aplican a los servicios que ofrezco como CiberByte. Al contratar un proyecto conmigo, los aceptas.</p>,
  },
  {
    titulo: 'Servicios',
    contenido: (
      <p>
        Hago landing pages, sitios corporativos, tiendas online y sistemas o apps a medida. También ofrezco mantención mensual y
        soporte de PC presencial, solo en Valparaíso y alrededores. Lo que incluye cada proyecto queda por escrito en la propuesta.
      </p>
    ),
  },
  {
    titulo: 'Contratación',
    contenido: (
      <p>
        Partimos con una conversación. Después te mando una propuesta con el precio final, el plazo y lo que incluye. El proyecto
        queda contratado cuando aceptas la propuesta y pagas el primer 50%.
      </p>
    ),
  },
  {
    titulo: 'Pagos',
    contenido: (
      <p>
        {PAYMENT_TERM} Si un proyecto necesita otro calendario de pagos, lo dejo escrito en la propuesta. {HOSTING_TERM}
      </p>
    ),
  },
  {
    titulo: 'Propiedad intelectual',
    contenido: <p>Cuando pagas el total, recibes todos los derechos de uso del trabajo entregado, incluidos el código fuente y los diseños.</p>,
  },
  {
    titulo: 'Garantía',
    contenido: <p>{GUARANTEE_TERM}</p>,
  },
  {
    titulo: 'Responsabilidad',
    contenido: <p>No respondo por daños indirectos o consecuentes. Mi responsabilidad máxima es el monto total que pagaste por el servicio.</p>,
  },
  {
    titulo: 'Contacto',
    contenido: (
      <p>
        Si tienes dudas sobre estos términos, escríbeme a <CorreoContacto />.
      </p>
    ),
  },
];

export default function TerminosPage() {
  return <PaginaLegal titulo="Términos y condiciones" bajada="Cómo trabajo con mis clientes, por escrito." secciones={SECCIONES} />;
}
