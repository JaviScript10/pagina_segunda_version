import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Precios from '@/components/Precios';
import Proyectos from '@/components/Proyectos';
import ComoTrabajo from '@/components/ComoTrabajo';
import SobreMi from '@/components/SobreMi';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'CiberByte: páginas web que trabajan por tu negocio' },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proyectos />
        <Precios />
        <ComoTrabajo />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
