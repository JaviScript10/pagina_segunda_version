'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/**
 * Contenedor que marca data-en-pantalla cuando entra en pantalla (una sola vez).
 * El CSS deja la animación en pausa hasta ese momento, así arranca cuando se ve y no al cargar.
 * Ojo: este contenedor no debe animarse. Si lleva el transform de la animación, el observador mide
 * la posición desplazada (fuera de la ventana) y en pantallas grandes nunca llega al umbral.
 */
export default function ArrancaAlVer({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visto, setVisto] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisto(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entrada]) => {
        // Que se vea buena parte del recorrido antes de arrancar: la mitad del elemento o, si es
        // más alto que la ventana, la mitad de la ventana
        const ventana = entrada.rootBounds?.height ?? window.innerHeight;
        const suficiente = entrada.intersectionRatio >= 0.5 || entrada.intersectionRect.height >= ventana / 2;
        if (entrada.isIntersecting && suficiente) {
          setVisto(true);
          io.disconnect();
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style} data-en-pantalla={visto || undefined}>
      {children}
    </div>
  );
}
