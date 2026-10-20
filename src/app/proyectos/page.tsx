import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Proyectos from '@/components/Proyectos';
import Ejercicios from '@/components/Ejercicios';
import { pricing } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Proyectos',
  alternates: { canonical: '/proyectos' },
};

// Mismo índice que la home, con el título como h1, y aparte los ejercicios de diseño
export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Proyectos nivel="h1" />
        <Ejercicios />

        {/* Cierre: después de ver el trabajo, el paso siguiente */}
        <section aria-labelledby="cierre-titulo" className="bg-niebla py-20 text-tinta lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-xl">
              <h2 id="cierre-titulo" className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                ¿Tienes un proyecto parecido?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-tinta/70">Cuéntame qué necesitas. {pricing.ivaNote}</p>
            </div>
            <a href="/#contacto" className="btn-principal self-start px-6 py-3.5 text-lg lg:self-auto">
              Ir a contacto
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
