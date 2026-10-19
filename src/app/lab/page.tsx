import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProyectosA from '@/components/lab/ProyectosA';
import ProyectosB from '@/components/lab/ProyectosB';
import PreciosA from '@/components/lab/PreciosA';
import PreciosB from '@/components/lab/PreciosB';
import { Rotulo } from '@/components/lab/comun';

// Ruta temporal para comparar propuestas. Fuera del sitemap y sin indexar.
export const metadata: Metadata = {
  title: 'Laboratorio de diseño',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Rotulo nombre="Proyectos A" descripcion="Bento asimétrico: capturas grandes sobre paneles del color de cada proyecto." />
        <ProyectosA />
        <Rotulo nombre="Proyectos B" descripcion="Índice de trabajos: nombres grandes y una vista previa que cambia al pasar el mouse." />
        <ProyectosB />
        <Rotulo nombre="Precios A" descripcion="Tarjetas con marco doble, cada una con su botón para cotizar por WhatsApp." />
        <PreciosA />
        <Rotulo nombre="Precios B" descripcion="Carta de precios tipográfica con intro fija y una fila por servicio." />
        <PreciosB />
      </main>
      <Footer />
    </>
  );
}
