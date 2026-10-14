'use client';

import { useEffect, useRef, useState } from 'react';

type Point = { x: number; y: number };

/**
 * El cable del hero (DESIGN.md §3): un solo trazo con catenaria que entra desde el borde
 * derecho, como un cable de poste, y termina en el botón de WhatsApp.
 * Se mide contra el hero real: [data-cable-start] (la captura) y [data-cable-end] (el botón).
 * El dibujo es CSS (.hero-cable en globals.css): una vez, sin animación con reduced motion.
 */
export default function HeroCable() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geom, setGeom] = useState<{ w: number; h: number; d: string } | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const hero = svg?.parentElement;
    if (!svg || !hero) return;

    const measure = () => {
      const end = hero.querySelector<HTMLElement>('[data-cable-end]');
      const start = hero.querySelector<HTMLElement>('[data-cable-start]');
      if (!end || !start) return;

      const hr = hero.getBoundingClientRect();
      const er = end.getBoundingClientRect();
      const sr = start.getBoundingClientRect();
      const w = hr.width;
      const h = hr.height;
      const stacked = window.matchMedia('(max-width: 1023px)').matches;

      let from: Point;
      let to: Point;
      let sag: number;

      if (stacked) {
        // Móvil: tramo corto desde el borde derecho hasta el costado del botón
        to = { x: er.right - hr.left, y: er.top - hr.top + er.height / 2 };
        from = { x: w + 2, y: to.y - 22 };
        sag = 18;
      } else {
        // Escritorio: cruza el hero bajo la captura y sube hasta el borde inferior del botón
        to = { x: er.right - hr.left - Math.min(36, er.width * 0.15), y: er.bottom - hr.top };
        from = { x: w + 2, y: Math.min(sr.bottom - hr.top + 36, h - 40) };
        sag = 56;
      }

      const lowest = Math.min(Math.max(from.y, to.y) + sag, h - 14);
      setGeom({ w, h, d: catenaryPath(from, to, lowest) });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(hero);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={geom ? `0 0 ${geom.w} ${geom.h}` : undefined}
      preserveAspectRatio="none"
    >
      {geom && <path className="hero-cable" d={geom.d} pathLength={1} />}
    </svg>
  );
}

/**
 * Catenaria y = ymin − a·(cosh((x − xm)/a) − 1) que pasa por ambos puntos con su punto más
 * bajo en `lowest` (en SVG, y crece hacia abajo). `a` se resuelve por bisección: el ancho
 * entre los puntos crece con `a`. El trazo va de `from` a `to`, que es el sentido del dibujo.
 */
function catenaryPath(from: Point, to: Point, lowest: number, steps = 56): string {
  const [left, right] = from.x < to.x ? [from, to] : [to, from];
  const h1 = Math.max(lowest - left.y, 0.01);
  const h2 = Math.max(lowest - right.y, 0.01);
  const span = right.x - left.x;
  const width = (a: number) => a * (Math.acosh(1 + h1 / a) + Math.acosh(1 + h2 / a));

  let lo = 0.01;
  let hi = 1e6;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (width(mid) < span) lo = mid;
    else hi = mid;
  }
  const a = (lo + hi) / 2;
  const xm = left.x + a * Math.acosh(1 + h1 / a);

  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = from.x + (to.x - from.x) * t;
    // Leve irregularidad de trazo a mano: menos de 1px, nula en los extremos
    const wobble = 0.7 * Math.sin(t * Math.PI * 4.6) * Math.sin(t * Math.PI);
    const y = lowest - a * (Math.cosh((x - xm) / a) - 1) + wobble;
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M${points.join(' L')}`;
}
