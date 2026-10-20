import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Proyectos from '@/components/Proyectos';
import Ejercicios from '@/components/Ejercicios';

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
      </main>
      <Footer />
    </>
  );
}
