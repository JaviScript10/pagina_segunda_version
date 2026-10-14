// Geometría y colores compartidos por la ilustración del hero (CerroIlustracion y AscensorCerro).

export const LIENZO = { w: 640, h: 560 };

// Tokens del brief + --color-verde-cerro, un verde sobrio solo para la ilustración
export const COLOR = {
  tinta: 'rgb(var(--color-tinta))',
  papel: 'rgb(var(--color-papel))',
  calamina: 'rgb(var(--color-calamina))',
  cerro: 'rgb(var(--color-cerro))',
  ascensor: 'rgb(var(--color-ascensor))',
  verde: 'rgb(var(--color-verde-cerro))',
};

/** Grosor de línea base de la ilustración. */
export const LINEA = 1.6;

export type Curva = [number, number][][];

// Perfiles de los cerros en tramos cúbicos: se usan para dibujarlos y para pararse sobre ellos
export const CERRO_FONDO: Curva = [
  [[0, 430], [90, 420], [160, 360], [230, 300]],
  [[230, 300], [300, 240], [360, 150], [450, 115]],
  [[450, 115], [520, 90], [590, 96], [640, 100]],
];
export const CERRO_FRENTE: Curva = [
  [[120, 520], [200, 515], [250, 470], [300, 405]],
  [[300, 405], [350, 340], [400, 255], [470, 205]],
  [[470, 205], [530, 162], [590, 150], [640, 146]],
];

/** Tramos cúbicos como comandos C de un path SVG. */
export const curvaD = (curva: Curva) => curva.map((c) => `C${c[1]} ${c[2]} ${c[3]}`).join('');

export const alturaFondo = (x: number) => alturaEn(CERRO_FONDO, x);
/** Superficie del cerro de adelante en x (la calle a la izquierda está en y = 520). */
export const alturaFrente = (x: number) => (x <= 120 ? 520 : alturaEn(CERRO_FRENTE, x));

/** Altura de una curva en x (bisección sobre el parámetro del tramo cúbico). */
function alturaEn(curva: Curva, x: number): number {
  const tramo = curva.find((c) => x >= c[0][0] && x <= c[3][0]) ?? curva[curva.length - 1];
  const at = (t: number, i: 0 | 1) =>
    (1 - t) ** 3 * tramo[0][i] + 3 * (1 - t) ** 2 * t * tramo[1][i] + 3 * (1 - t) * t ** 2 * tramo[2][i] + t ** 3 * tramo[3][i];
  let lo = 0;
  let hi = 1;
  for (let k = 0; k < 40; k++) {
    const mid = (lo + hi) / 2;
    if (at(mid, 0) < x) lo = mid;
    else hi = mid;
  }
  return at((lo + hi) / 2, 1);
}
