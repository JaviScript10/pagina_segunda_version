import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProyectosGallery from '@/components/ProyectosGallery';

export const metadata: Metadata = {
  title: 'Proyectos',
  alternates: { canonical: '/proyectos' },
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Header />
        
        <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Portafolio Completo</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Proyectos que Transforman Negocios</h1>
            <p className="text-gray-600">Haz clic en cualquier proyecto para abrir la galería con sus 3 fotos, desafíos, soluciones y resultados detallados.</p>
            <div className="mt-6">
              <a href="/" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-sm">
                ← Volver al inicio
              </a>
            </div>
          </div>

          <ProyectosGallery />
        </div>
      </div>

      <Footer />
    </main>
  );
}
