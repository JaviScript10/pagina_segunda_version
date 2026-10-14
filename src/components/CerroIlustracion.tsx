import { catenaryPath } from '@/lib/catenary';
import { COLOR, LINEA, CERRO_FONDO, CERRO_FRENTE, alturaFondo, curvaD } from '@/lib/cerro';
import { ViaAscensor } from './AscensorCerro';

const { tinta, papel, calamina, cerro, ascensor, verde } = COLOR;

/*
 * Ilustración del hero: un cerro de Valparaíso con casas de calamina, postes con cables y
 * (en AscensorCerro) el ascensor. Vectorial, dibujada a mano en un lienzo de 640×560.
 * Colores: tokens del brief + --color-verde-cerro, solo para la ilustración.
 */

type Techo = 'dos-aguas' | 'una-agua' | 'plano';
type Casa = {
  x: number;
  base: number;
  w: number;
  h: number;
  color: string;
  techo: Techo;
  colorTecho?: string;
  pisos?: 1 | 2;
  puerta?: boolean;
};

// De arriba hacia abajo: las filas de más abajo tapan a las de arriba
const CASAS: Casa[] = [
  // Cumbre
  { x: 500, base: 194, w: 44, h: 38, color: papel, techo: 'dos-aguas', colorTecho: ascensor },
  { x: 550, base: 172, w: 40, h: 50, color: cerro, techo: 'una-agua', colorTecho: tinta },
  { x: 596, base: 160, w: 44, h: 40, color: calamina, techo: 'dos-aguas', colorTecho: tinta },
  // Terraza alta (base 300)
  { x: 436, base: 300, w: 52, h: 50, color: papel, techo: 'plano', pisos: 2 },
  { x: 494, base: 300, w: 46, h: 60, color: cerro, techo: 'dos-aguas', colorTecho: tinta, pisos: 2 },
  { x: 546, base: 300, w: 30, h: 44, color: calamina, techo: 'una-agua', colorTecho: tinta },
  { x: 590, base: 300, w: 50, h: 52, color: papel, techo: 'dos-aguas', colorTecho: cerro, pisos: 2 },
  // Terraza media (base 400)
  { x: 350, base: 400, w: 56, h: 52, color: calamina, techo: 'una-agua', colorTecho: tinta, pisos: 2 },
  { x: 412, base: 400, w: 62, h: 60, color: papel, techo: 'dos-aguas', colorTecho: tinta, pisos: 2, puerta: true },
  { x: 480, base: 400, w: 48, h: 44, color: cerro, techo: 'plano' },
  { x: 534, base: 400, w: 50, h: 58, color: papel, techo: 'una-agua', colorTecho: ascensor, pisos: 2 },
  { x: 590, base: 400, w: 50, h: 46, color: cerro, techo: 'dos-aguas', colorTecho: tinta },
  // Terraza baja (base 500)
  { x: 252, base: 500, w: 50, h: 48, color: papel, techo: 'dos-aguas', colorTecho: cerro, puerta: true },
  { x: 308, base: 500, w: 58, h: 62, color: cerro, techo: 'una-agua', colorTecho: tinta, pisos: 2 },
  { x: 372, base: 500, w: 52, h: 46, color: papel, techo: 'plano', puerta: true },
  { x: 430, base: 500, w: 64, h: 58, color: calamina, techo: 'dos-aguas', colorTecho: tinta, pisos: 2 },
  { x: 500, base: 500, w: 54, h: 50, color: papel, techo: 'una-agua', colorTecho: cerro, puerta: true },
  { x: 560, base: 500, w: 80, h: 56, color: cerro, techo: 'plano', pisos: 2 },
  // Calle, a la izquierda
  { x: 6, base: 520, w: 50, h: 96, color: cerro, techo: 'dos-aguas', colorTecho: tinta, pisos: 2, puerta: true },
  { x: 66, base: 520, w: 46, h: 64, color: papel, techo: 'plano', pisos: 2, puerta: true },
];

// Casas del cerro de atrás: más chicas y sin ventanas, para dar profundidad.
// [x, ancho, alto, color, fila]: la fila 1 queda un escalón más abajo, entre las de la fila 0.
const CASAS_FONDO: [number, number, number, string, number][] = [
  [196, 20, 16, papel, 0],
  [218, 18, 20, calamina, 0],
  [238, 22, 15, cerro, 0],
  [262, 18, 19, papel, 0],
  [282, 24, 16, cerro, 0],
  [308, 18, 20, papel, 0],
  [328, 22, 15, calamina, 0],
  [352, 20, 18, papel, 0],
  [374, 18, 16, cerro, 0],
  [394, 22, 18, papel, 0],
  [418, 18, 15, cerro, 0],
  [532, 22, 15, papel, 0],
  [556, 18, 18, cerro, 0],
  [576, 24, 15, papel, 0],
  [602, 20, 17, calamina, 0],
  [150, 22, 16, cerro, 1],
  [176, 18, 18, papel, 1],
  [206, 24, 15, papel, 1],
  [232, 18, 17, cerro, 1],
  [252, 22, 16, calamina, 1],
  [280, 20, 18, papel, 1],
  [304, 22, 15, cerro, 1],
  [330, 18, 17, papel, 1],
  [354, 22, 16, cerro, 1],
];

const CERRO_FONDO_D = `M0 560V${CERRO_FONDO[0][0][1]}${curvaD(CERRO_FONDO)}V560Z`;

// Postes: x, base, altura. Los cables cuelgan entre las puntas de las crucetas.
const POSTES = [
  // El de la calle es más alto: sus cables pasan sobre la cabina detenida en la estación
  { x: 96, base: 520, alto: 148 },
  { x: 342, base: 400, alto: 98 },
  { x: 586, base: 300, alto: 104 },
];
const BRAZO = 11;

/** `simple`: versión para pantallas chicas, sin el cerro de atrás ni el tercer cable de cada tramo. */
export default function CerroIlustracion({ id, simple = false }: { id: string; simple?: boolean }) {
  const pat = `${id}-calamina`;
  const top = (p: (typeof POSTES)[number]) => p.base - p.alto;

  const cables: string[] = [];
  for (let i = 0; i < POSTES.length - 1; i++) {
    const a = POSTES[i];
    const b = POSTES[i + 1];
    const ya = top(a) + 3;
    const yb = top(b) + 3;
    // Dos cables en las puntas de la cruceta y uno más bajo, con distinta flecha
    cables.push(catenaryPath({ x: a.x - BRAZO, y: ya }, { x: b.x - BRAZO, y: yb }, Math.max(ya, yb) + 18));
    cables.push(catenaryPath({ x: a.x + BRAZO, y: ya }, { x: b.x + BRAZO, y: yb }, Math.max(ya, yb) + 24));
    if (!simple) cables.push(catenaryPath({ x: a.x, y: ya + 16 }, { x: b.x, y: yb + 16 }, Math.max(ya, yb) + 16 + 12));
  }

  return (
    <g>
      <defs>
        {/* Calamina: ondas verticales finas sobre el color plano */}
        <pattern id={pat} width="4" height="8" patternUnits="userSpaceOnUse">
          <path d="M1 0V8" stroke={tinta} strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Cerro de atrás */}
      {!simple && <path d={CERRO_FONDO_D} fill={verde} fillOpacity="0.4" />}
      {!simple && [...CASAS_FONDO].sort((a, b) => a[4] - b[4]).map(([x, w, h, color, fila]) => {
        // Asentada en la pendiente: la base queda bajo la curva en su lado más bajo
        const base = Math.max(alturaFondo(x), alturaFondo(x + w)) + 3 + fila * 16;
        const top = base - h;
        return (
          <g key={x} opacity="0.7">
            <path d={`M${x - 2} ${top}L${x + w / 2} ${top - 7}L${x + w + 2} ${top}Z`} fill={tinta} />
            <rect x={x} y={top} width={w} height={h} fill={color} stroke={tinta} strokeWidth="1" />
          </g>
        );
      })}

      {/* Cerro de adelante */}
      <path
        d={`M0 560V520H120${curvaD(CERRO_FRENTE)}V560Z`}
        fill={verde}
        stroke={tinta}
        strokeWidth={LINEA}
        strokeLinejoin="round"
      />

      {/* Muros de contención de las terrazas */}
      {[
        [425, 300],
        [340, 400],
        [242, 500],
      ].map(([x, y]) => (
        <g key={y}>
          <rect x={x} y={y} width={640 - x} height="7" fill={papel} fillOpacity="0.55" />
          <path d={`M${x} ${y}H640`} stroke={tinta} strokeWidth={LINEA} />
        </g>
      ))}

      {CASAS.map((c) => (
        <CasaSvg key={`${c.x}-${c.base}`} casa={c} pat={pat} />
      ))}

      {/* Escalera bajo el viaducto */}
      <Escalera />

      {/* Viaducto, rieles y estación de arriba del ascensor */}
      <ViaAscensor />

      {/* Calle */}
      <rect x="0" y="520" width="640" height="40" fill={papel} />
      <path d="M0 520H640" stroke={tinta} strokeWidth={LINEA} />
      <path d="M0 541H640" stroke={tinta} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="14 10" />

      {/* Postes y cables */}
      {cables.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={tinta} strokeWidth="1.2" strokeLinecap="round" />
      ))}
      {POSTES.map((p) => (
        <g key={p.x} stroke={tinta} strokeLinecap="round">
          <path d={`M${p.x} ${p.base}V${top(p)}`} strokeWidth="3" />
          <path d={`M${p.x - BRAZO - 2} ${top(p) + 3}H${p.x + BRAZO + 2}`} strokeWidth="2.4" />
          <path d={`M${p.x - 5} ${top(p) + 19}H${p.x + 5}`} strokeWidth="2" />
          {[-BRAZO, BRAZO].map((dx) => (
            <circle key={dx} cx={p.x + dx} cy={top(p) + 1} r="1.8" fill={papel} strokeWidth="1" />
          ))}
        </g>
      ))}
    </g>
  );
}

function CasaSvg({ casa: c, pat }: { casa: Casa; pat: string }) {
  const top = c.base - c.h;
  const pisos = c.pisos ?? 1;
  const ventanas = Math.max(1, Math.floor((c.w - 10) / 17));
  const altoPiso = c.h / pisos;
  const vw = 9;
  const vh = 12;

  let techo = null;
  if (c.techo === 'dos-aguas') {
    const alto = Math.min(18, c.w * 0.32);
    techo = (
      <path
        d={`M${c.x - 3} ${top}L${c.x + c.w / 2} ${top - alto}L${c.x + c.w + 3} ${top}Z`}
        fill={c.colorTecho ?? tinta}
        stroke={tinta}
        strokeWidth={LINEA}
        strokeLinejoin="round"
      />
    );
  } else if (c.techo === 'una-agua') {
    techo = (
      <path
        d={`M${c.x - 3} ${top}V${top - 12}L${c.x + c.w + 3} ${top - 4}V${top}Z`}
        fill={c.colorTecho ?? tinta}
        stroke={tinta}
        strokeWidth={LINEA}
        strokeLinejoin="round"
      />
    );
  } else {
    techo = <rect x={c.x - 2} y={top - 5} width={c.w + 4} height="5" fill={tinta} />;
  }

  const huecos = [];
  for (let piso = 0; piso < pisos; piso++) {
    const yPiso = top + piso * altoPiso;
    for (let i = 0; i < ventanas; i++) {
      // La puerta reemplaza la primera ventana del piso de abajo
      if (c.puerta && piso === pisos - 1 && i === 0) continue;
      const paso = c.w / ventanas;
      const x = c.x + paso * i + (paso - vw) / 2;
      const y = yPiso + (altoPiso - vh) / 2 - 1;
      huecos.push(
        <g key={`${piso}-${i}`}>
          <rect x={x} y={y} width={vw} height={vh} fill={papel} stroke={tinta} strokeWidth="1.2" />
          <path d={`M${x + vw / 2} ${y}V${y + vh}M${x} ${y + vh / 2}H${x + vw}`} stroke={tinta} strokeWidth="0.8" />
        </g>
      );
    }
  }

  const paso = c.w / ventanas;
  return (
    <g>
      {techo}
      <rect x={c.x} y={top} width={c.w} height={c.h} fill={c.color} />
      {c.color !== papel && <rect x={c.x} y={top} width={c.w} height={c.h} fill={`url(#${pat})`} />}
      <rect x={c.x} y={top} width={c.w} height={c.h} fill="none" stroke={tinta} strokeWidth={LINEA} strokeLinejoin="round" />
      {huecos}
      {c.puerta && (
        <rect
          x={c.x + (paso - 10) / 2}
          y={c.base - 17}
          width="10"
          height="17"
          fill={tinta}
          fillOpacity="0.85"
        />
      )}
    </g>
  );
}

function Escalera() {
  // Peldaños de 7 de huella y 6.5 de contrahuella, subiendo desde la calle hasta la terraza baja
  const pasos: string[] = [];
  let x = 196;
  let y = 520;
  pasos.push(`M${x} ${y}`);
  for (let i = 0; i < 9; i++) {
    y -= 6.5;
    pasos.push(`V${y}`);
    x += 7;
    pasos.push(`H${x}`);
  }
  const fin = { x, y };
  return (
    <g stroke={tinta} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`${pasos.join('')}V520Z`} fill={papel} strokeWidth="1.3" />
      {/* Baranda */}
      <path d={`M196 506L${fin.x} ${fin.y - 14}`} strokeWidth="1.4" />
      {[0, 0.33, 0.66, 1].map((t) => {
        const px = 196 + (fin.x - 196) * t;
        const py = 520 + (fin.y - 520) * t;
        return <path key={t} d={`M${px} ${py}V${py - 14}`} strokeWidth="1.2" />;
      })}
    </g>
  );
}
