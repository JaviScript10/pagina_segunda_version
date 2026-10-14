import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
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
        <Portfolio />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
