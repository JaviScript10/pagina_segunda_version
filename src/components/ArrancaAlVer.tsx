'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/**
 * Contenedor que marca data-en-pantalla cuando entra en pantalla (una sola vez).
 * El CSS deja la animación en pausa hasta ese momento, así arranca cuando se ve y no al cargar.
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
        if (entrada.isIntersecting) {
          setVisto(true);
          io.disconnect();
        }
      },
      // Que se vea buena parte del recorrido antes de arrancar
      { threshold: 0.5 }
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
