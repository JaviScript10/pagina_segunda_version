// Color de acento de cada proyecto, como las fachadas de un cerro. Pares fondo/texto con
// contraste AA verificado: Calamina+Tinta 9,0:1 · Cerro+Papel 6,4:1 · Ascensor+Papel 5,2:1 ·
// Verde cerro (#4A7558)+Papel 5,3:1.

export type Acento = 'calamina' | 'cerro' | 'ascensor' | 'verde';

export const ACENTO: Record<Acento, { fondo: string; texto: string }> = {
  calamina: { fondo: 'bg-calamina', texto: 'text-tinta' },
  cerro: { fondo: 'bg-cerro', texto: 'text-papel' },
  ascensor: { fondo: 'bg-ascensor', texto: 'text-papel' },
  verde: { fondo: 'bg-verde-cerro', texto: 'text-papel' },
};

/** Calamina corrugada: líneas verticales finas en Tinta sobre el color de la fachada. */
export const CORRUGADO =
  'repeating-linear-gradient(90deg, rgb(var(--color-tinta) / 0.1) 0 1.5px, transparent 1.5px 7px)';
