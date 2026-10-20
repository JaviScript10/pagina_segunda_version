import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Precios from '@/components/Precios';
import Proyectos from '@/components/Proyectos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'CiberByte - Soluciones Digitales Profesionales en Chile' },
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
