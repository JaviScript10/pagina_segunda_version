'use client';
import { useState, useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaTools, FaStore, FaBuilding, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'desarrollo' | 'marketing'>('desarrollo');
  const scrollRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = '56934341783';

  const getWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(`Hola CiberByte, me interesa cotizar el servicio de: ${serviceName}. ¿Me pueden dar más detalles?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Servicios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Soluciones <span className="text-primary-600">Digitales Completas</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">Desde la idea hasta el lanzamiento, selecciona una categoría para explorar lo que necesitas.</p>

          {/* Botones de Pestañas (Tabs) */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('desarrollo')}
              className={`px-7 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'desarrollo'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Desarrollo Web & Apps
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-7 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'marketing'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Marketing, SEO & Soporte
            </button>
          </div>
        </div>

        {/* Contenedor del Carrusel con Flechas Flotantes en Móvil */}
        <div className="relative group">
          
          {/* Botón Flecha Izquierda (Solo Móvil/Tablet) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl backdrop-blur-md md:hidden border border-gray-100 transition-all active:scale-95"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Botón Flecha Derecha (Solo Móvil/Tablet con animación sutil) */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl backdrop-blur-md md:hidden border border-gray-100 transition-all animate-bounce active:scale-95"
            aria-label="Siguiente"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Carrusel / Grilla */}
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0"
          >
            {activeTab === 'desarrollo' ? (
              <>
                {/* Landing Pages */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 text-2xl shadow-sm">
                      <FaLaptopCode />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Landing Pages</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Páginas de aterrizaje optimizadas para conversión. Diseño atractivo y carga rápida.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• Diseño responsivo</li>
                      <li>• SEO optimizado</li>
                      <li>• Formularios integrados</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Landing Pages')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Sitios Corporativos */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 text-2xl shadow-sm">
                      <FaBuilding />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Sitios Corporativos</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Sitios web profesionales que representan tu marca de forma moderna y elegante.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• Multi-página</li>
                      <li>• Panel de admin</li>
                      <li>• Blog integrado</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Sitios Corporativos')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 text-2xl shadow-sm">
                      <FaStore />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">E-commerce</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Tiendas online completas con pasarela de pago para gestionar productos fácilmente.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• Carrito de compras</li>
                      <li>• Pago integrado</li>
                      <li>• Panel vendedor</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('E-commerce')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Apps Móviles */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-6 text-2xl shadow-sm">
                      <FaMobileAlt />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Apps Móviles</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Aplicaciones nativas o híbridas para iOS y Android con excelente experiencia.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• iOS & Android</li>
                      <li>• Push notifications</li>
                      <li>• Backend incluido</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Apps Móviles')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* SEO & Marketing */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-6 text-2xl shadow-sm">
                      <FaChartLine />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO & Marketing</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Posiciona tu sitio en Google mediante auditorías y estrategias efectivas.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• Auditoría SEO</li>
                      <li>• Optimización on-page</li>
                      <li>• Reportes mensuales</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('SEO & Marketing')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Mantenimiento */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-6 text-2xl shadow-sm">
                      <FaTools />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Mantenimiento</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">Mantén tu sitio actualizado, seguro y con soporte técnico continuo.</p>
                    <ul className="text-xs text-gray-500 space-y-3 mb-8">
                      <li>• Actualizaciones</li>
                      <li>• Backups diarios</li>
                      <li>• Soporte 24/7</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Mantenimiento')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Indicador visual de deslizamiento */}
        <div className="flex justify-center items-center gap-1.5 mt-4 md:hidden text-gray-400 text-xs">
          <span>← Desliza para ver más →</span>
        </div>

      </div>
    </section>
  );
}