'use client';
import { useState, useEffect, useRef } from 'react';
import { FaTrophy, FaUsers, FaClock, FaRocket, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Componente para animar los números desde 0
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Calidad Premium",
      desc: "Cada línea de código y cada píxel son cuidadosamente elaborados para garantizar excelencia."
    },
    {
      title: "Velocidad",
      desc: "Optimizamos cada aspecto técnico para que tu sitio cargue en menos de 1 segundo."
    },
    {
      title: "Soporte",
      desc: "No te dejamos solo después del lanzamiento. Estamos aquí para cualquier duda o mejora."
    },
    {
      title: "Tecnología",
      desc: "Usamos las últimas tecnologías y mejores prácticas del desarrollo web moderno."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Nosotros</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Tu Socio en <span className="text-primary-600">Transformación Digital</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Somos un equipo de desarrolladores y diseñadores apasionados por crear experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Tarjetas de Métricas más compactas en celular (grid-cols-2) y amplias en PC */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-50 text-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-4 shadow-sm">
              <FaTrophy />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-primary-600 mb-1">
              <Counter end={50} suffix="+" />
            </div>
            <div className="text-[11px] sm:text-sm text-gray-500 font-medium">Proyectos Completados</div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-50 text-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-4 shadow-sm">
              <FaUsers />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-primary-600 mb-1">
              <Counter end={40} suffix="+" />
            </div>
            <div className="text-[11px] sm:text-sm text-gray-500 font-medium">Clientes Satisfechos</div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-50 text-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-4 shadow-sm">
              <FaClock />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-primary-600 mb-1">
              <Counter end={5} suffix="+" />
            </div>
            <div className="text-[11px] sm:text-sm text-gray-500 font-medium">Años de Experiencia</div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-50 text-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-4 shadow-sm">
              <FaRocket />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-primary-600 mb-1">
              <Counter end={100} suffix="%" />
            </div>
            <div className="text-[11px] sm:text-sm text-gray-500 font-medium">Entrega a Tiempo</div>
          </div>

        </div>

        {/* Pilares con Carrusel Táctil + Flechas fijas en Celular / Grilla limpia en PC */}
        <div className="relative px-0 sm:px-6">
          
          {/* Botón Flecha Izquierda (Solo Móvil) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 md:hidden flex items-center justify-center"
            aria-label="Anterior"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          {/* Botón Flecha Derecha (Solo Móvil) */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all active:scale-95 md:hidden flex items-center justify-center"
            aria-label="Siguiente"
          >
            <FaChevronRight className="text-xs" />
          </button>

          {/* Contenedor de Pilares */}
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mx-6 md:mx-0 px-2 md:px-0"
          >
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[78%] sm:min-w-[280px] md:min-w-0 bg-gray-50/70 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all snap-center"
              >
                <div>
                  <div className="text-primary-600 text-xl sm:text-2xl mb-3">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador táctil visual móvil */}
        <div className="flex justify-center items-center gap-1.5 mt-4 md:hidden text-gray-400 text-xs">
          <span>← Usa las flechas o desliza para ver los pilares →</span>
        </div>

      </div>
    </section>
  );
}