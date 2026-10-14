export type Point = { x: number; y: number };

/**
 * Cable colgando entre dos puntos: catenaria y = ymin − a·(cosh((x − xm)/a) − 1) con su punto
 * más bajo en `lowest` (en SVG, y crece hacia abajo). `a` se resuelve por bisección: el ancho
 * entre los puntos crece con `a`. Devuelve un path SVG de `from` a `to`.
 */
export function catenaryPath(from: Point, to: Point, lowest: number, steps = 40): string {
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
    const x = from.x + ((to.x - from.x) * i) / steps;
    const y = lowest - a * (Math.cosh((x - xm) / a) - 1);
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${points.join(' L')}`;
}
