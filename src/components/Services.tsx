'use client';
import { useState, useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaTools, FaStore, FaBuilding, FaWhatsapp, FaChevronLeft, FaChevronRight, FaDesktop, FaHdd, FaMemory } from 'react-icons/fa';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'desarrollo' | 'marketing' | 'hardware'>('desarrollo');
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
    <section id="servicios" className="py-16 md:py-24 lg:py-32 bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Servicios</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-3">
            Soluciones <span className="text-primary-600">Digitales & Técnicas</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Selecciona una categoría para explorar el servicio que necesitas.</p>

          {/* Botones de Pestañas (Tabs) - Optimizados para celular */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-3 mt-6">
            <button
              onClick={() => setActiveTab('desarrollo')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                activeTab === 'desarrollo'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Desarrollo Web & Apps
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                activeTab === 'marketing'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Marketing, SEO & Soporte Web
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                activeTab === 'hardware'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Soporte & Hardware de PC
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

          {/* Carrusel / Grilla dinámico según la pestaña activa */}
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:mx-0 md:px-0"
          >
            {activeTab === 'desarrollo' ? (
              <>
                {/* Landing Pages */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaLaptopCode />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Landing Pages</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Páginas de aterrizaje optimizadas para conversión. Diseño atractivo y carga rápida.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
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
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Sitios Corporativos */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaBuilding />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sitios Corporativos</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Sitios web profesionales que representan tu marca de forma moderna y elegante.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
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
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaStore />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">E-commerce</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Tiendas online completas con pasarela de pago para gestionar productos fácilmente.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
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
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </>
            ) : activeTab === 'marketing' ? (
              <>
                {/* Apps Móviles */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaMobileAlt />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Apps Móviles</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Aplicaciones nativas o híbridas para iOS y Android con excelente experiencia.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
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
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* SEO & Marketing */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaChartLine />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">SEO & Marketing</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Posiciona tu sitio en Google mediante auditorías y estrategias efectivas.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
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
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Mantenimiento Web */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaTools />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Mantenimiento Web</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Mantén tu sitio actualizado, seguro y con soporte técnico continuo.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
                      <li>• Actualizaciones</li>
                      <li>• Backups diarios</li>
                      <li>• Soporte 24/7</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Mantenimiento Web')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Mantenimiento Preventivo PC */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaDesktop />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Mantenimiento Preventivo</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Limpieza profunda y optimización general para alargar la vida útil de tus equipos.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
                      <li>• Limpieza de polvo en componentes</li>
                      <li>• Cambio de pasta térmica de alta calidad</li>
                      <li>• Optimización de arranque y sistema</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Mantenimiento Preventivo PC')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Formateo & Respaldo */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaHdd />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Formateo & Respaldo</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Instalación limpia de sistema operativo asegurando que no pierdas tus archivos importantes.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
                      <li>• Respaldo seguro de archivos</li>
                      <li>• Instalación de Windows/Mac y drivers</li>
                      <li>• Programas esenciales instalados</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Formateo y Respaldo')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
                    >
                      <FaWhatsapp className="text-emerald-400 group-hover:text-white text-lg transition-colors" />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Actualización de Hardware */}
                <div className="min-w-[85%] sm:min-w-[350px] md:min-w-0 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between snap-center">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5 text-xl sm:text-2xl shadow-sm">
                      <FaMemory />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Actualización de Hardware</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Dale una nueva vida a tu PC o notebook cambiando piezas clave por componentes más rápidos.</p>
                    <ul className="text-xs text-gray-500 space-y-2.5 mb-6">
                      <li>• Instalación de discos SSD ultrarrápidos</li>
                      <li>• Ampliación de memoria RAM</li>
                      <li>• Asesoría en compra de componentes</li>
                    </ul>
                  </div>
                  <div>
                    <a 
                      href={getWhatsAppLink('Actualización de Hardware')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-600 text-white py-3 rounded-2xl font-medium text-sm transition-all shadow-sm group"
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