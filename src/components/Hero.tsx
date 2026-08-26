'use client';
import { useEffect, useRef } from 'react';
import { FaArrowRight, FaCode } from 'react-icons/fa';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = window.innerWidth < 768 ? 35 : 75;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const safeZoneRadiusX = Math.min(width * 0.42, 450);
      const safeZoneRadiusY = 220;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = Math.abs(p.x - centerX);
        const dy = Math.abs(p.y - centerY);
        const isInSafeZone = dx < safeZoneRadiusX && dy < safeZoneRadiusY;
        const alphaMultiplier = isInSafeZone ? 0.15 : 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.6 * alphaMultiplier})`; 
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
          
          if (distance < 160) {
            const p2InSafeZone = Math.abs(p2.x - centerX) < safeZoneRadiusX && Math.abs(p2.y - centerY) < safeZoneRadiusY;
            const lineAlphaMultiplier = (isInSafeZone || p2InSafeZone) ? 0.08 : 0.3;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlphaMultiplier * (1 - distance / 160)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-100">
      
      {/* Línea blanca divisoria superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-20 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

      {/* Imagen de fondo real (fondo1.jpg) con 75% de transparencia (opacity-25) + Canvas de constelaciones */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/fondo1.jpg" 
          alt="Fondo oficina CiberByte" 
          className="w-full h-full object-cover opacity-15 scale-105"
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-1 opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        
        <div className="space-y-6">
          
          {/* Etiqueta superior */}
          <div className="inline-flex items-center gap-2 bg-white text-primary-900 font-extrabold text-xs sm:text-base uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg backdrop-blur-md relative overflow-hidden border-2 border-primary-300 group">
            <span className="absolute inset-0 bg-primary-100/50 animate-pulse" />
            <span className="relative z-10">Soluciones Digitales & Desarrollo de Software</span>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            Transforma tu <span className="text-primary-600">Presencia Digital</span>
          </h1>
          
          {/* Párrafo descriptivo */}
          <p className="text-lg sm:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-bold">
            Creamos soluciones web modernas, rápidas y optimizadas para impulsar <br className="hidden sm:inline" />
            tu negocio. Desde landing pages hasta e-commerce completos.
          </p>

          {/* Botones de acción simétricos */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-primary-600/30 hover:scale-105"
            >
              Solicita tu Cotización
              <FaArrowRight className="text-xs" />
            </a>
            
            <a 
              href="#proyectos" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-primary-600/30 hover:scale-105"
            >
              <FaCode className="text-white" />
              Ver Proyectos
            </a>
          </div>

        </div>

      </div>

      {/* Indicador de scroll inferior */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-500 text-xs flex flex-col items-center gap-1 opacity-85 animate-bounce hidden sm:flex font-medium">
        <span>Desliza para explorar</span>
        <div className="w-1 h-3 rounded-full border border-gray-400 flex justify-center p-0.5">
          <div className="w-0.5 h-1 bg-gray-500 rounded-full animate-pulse" />
        </div>
      </div>

    </section>
  );
}