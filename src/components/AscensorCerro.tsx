import { COLOR, LINEA, VISTA_COMPLETA, alturaFrente, viewBox, type Vista } from '@/lib/cerro';

/*
 * Ascensor del cerro: viaducto con rieles inclinados, estación de abajo y de arriba (ViaAscensor,
 * dentro del SVG de la ilustración) y la cabina (CabinaAscensor), que va en una capa HTML aparte
 * encima del SVG para que su animación de transform corra en el compositor.
 */

const { tinta, papel, ascensor, calamina } = COLOR;

// Rieles: de la estación de abajo (calle) a la de arriba (cumbre)
const ABAJO = { x: 160, y: 512 };
const ARRIBA = { x: 470, y: 206 };
const LARGO = Math.hypot(ARRIBA.x - ABAJO.x, ARRIBA.y - ABAJO.y);
/** Dirección de subida (unitaria). */
const U = { x: (ARRIBA.x - ABAJO.x) / LARGO, y: (ARRIBA.y - ABAJO.y) / LARGO };
/** Normal hacia abajo de la vía (para el segundo riel y los durmientes). */
const N = { x: -U.y, y: U.x };

const enVia = (s: number, off = 0) => ({ x: ABAJO.x + U.x * s + N.x * off, y: ABAJO.y + U.y * s + N.y * off });

// Cabina: largo del chasis sobre la vía y paradas (distancia desde la estación de abajo)
const CHASIS = 46;
const PARADA_ABAJO = 44;
const PARADA_ARRIBA = LARGO - CHASIS - 30;

/** Recorrido de la cabina en % de la vista: la capa mide lo mismo que la vista (recortada o no). */
const recorrido = (v: Vista) => ({
  x: `${(((PARADA_ARRIBA - PARADA_ABAJO) * U.x) / v.w) * 100}%`,
  y: `${(((PARADA_ARRIBA - PARADA_ABAJO) * U.y) / v.h) * 100}%`,
});

export function ViaAscensor() {
  // Pilares del viaducto cada 24 unidades en x, desde la vía hasta el cerro
  const pilares: { x: number; top: number; base: number }[] = [];
  for (let x = ABAJO.x + 52; x < ARRIBA.x - 8; x += 24) {
    const s = (x - ABAJO.x) / U.x;
    const top = enVia(s, 5).y;
    const base = alturaFrente(x);
    if (base - top > 6) pilares.push({ x, top, base });
  }
  const durmientes: number[] = [];
  for (let s = 10; s < LARGO - 4; s += 11) durmientes.push(s);

  const r1a = enVia(0);
  const r1b = enVia(LARGO);
  const r2a = enVia(0, 5);
  const r2b = enVia(LARGO, 5);

  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Viaducto: pilares y diagonales */}
      <g stroke={tinta} strokeWidth="1.3">
        {pilares.map((p, i) => (
          <g key={p.x}>
            <path d={`M${p.x} ${p.top}V${p.base}`} />
            {i > 0 && <path d={`M${pilares[i - 1].x} ${pilares[i - 1].top + 4}L${p.x} ${Math.min(p.base, pilares[i - 1].base) - 2}`} strokeOpacity="0.55" strokeWidth="1" />}
          </g>
        ))}
      </g>

      {/* Durmientes y rieles */}
      <g stroke={tinta}>
        {durmientes.map((s) => {
          const a = enVia(s, -1.5);
          const b = enVia(s, 6.5);
          return <path key={s} d={`M${a.x} ${a.y}L${b.x} ${b.y}`} strokeWidth="1.2" />;
        })}
        <path d={`M${r2a.x} ${r2a.y}L${r2b.x} ${r2b.y}`} strokeWidth="1.6" />
        <path d={`M${r1a.x} ${r1a.y}L${r1b.x} ${r1b.y}`} strokeWidth="2.2" />
      </g>

      {/* Estación de arriba: caseta de máquinas en la cumbre */}
      <g stroke={tinta} strokeWidth={LINEA}>
        <rect x="448" y="170" width="46" height="40" fill={calamina} />
        <path d="M444 170L471 156L498 170Z" fill={tinta} />
        <rect x="455" y="182" width="16" height="28" fill={tinta} fillOpacity="0.85" stroke="none" />
        <rect x="477" y="180" width="10" height="12" fill={papel} strokeWidth="1.2" />
      </g>

      {/* Estación de abajo: fachada con arco hacia la calle */}
      <g stroke={tinta} strokeWidth={LINEA}>
        <rect x="118" y="472" width="80" height="48" fill={papel} />
        <rect x="114" y="466" width="88" height="7" fill={tinta} />
        <path d="M136 520V500A12 12 0 0 1 160 500V520Z" fill={tinta} fillOpacity="0.85" />
        <rect x="170" y="484" width="20" height="9" fill={ascensor} strokeWidth="1.2" />
      </g>
    </g>
  );
}

/** Cabina en la parada de abajo, en coordenadas del lienzo. La animación la trae desde arriba. */
function Cabina() {
  const p0 = enVia(PARADA_ABAJO); // rueda de abajo
  const p1 = enVia(PARADA_ABAJO + CHASIS); // rueda de arriba
  const piso = p1.y - 3; // el piso de la caja es horizontal, a la altura de la rueda de arriba
  const alto = 30;
  const x0 = p0.x - 2;
  const ancho = p1.x - p0.x + 4;
  const ventana = (x: number) => (
    <g key={x}>
      <rect x={x} y={piso - alto + 7} width="10" height="12" rx="1" fill={papel} stroke={tinta} strokeWidth="1.2" />
      <path d={`M${x} ${piso - alto + 13}H${x + 10}`} stroke={tinta} strokeWidth="0.8" />
    </g>
  );

  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Chasis: bastidor triangular de fierro; la hipotenusa va sobre los rieles y el piso es plano */}
      <path d={`M${p0.x} ${p0.y}L${p1.x} ${p1.y}L${p0.x} ${piso}Z`} fill={tinta} fillOpacity="0.18" stroke={tinta} strokeWidth="1.6" />
      {[1 / 3, 2 / 3].map((t) => {
        const x = p0.x + (p1.x - p0.x) * t;
        const y = p0.y + (p1.y - p0.y) * t;
        return <path key={t} d={`M${x} ${y}V${piso}`} stroke={tinta} strokeWidth="1.2" />;
      })}
      {/* Caja */}
      <rect x={x0} y={piso - alto} width={ancho} height={alto} fill={ascensor} stroke={tinta} strokeWidth={LINEA} />
      <rect x={x0 - 2} y={piso - alto - 4} width={ancho + 4} height="4" fill={tinta} />
      {ventana(x0 + 5)}
      {ventana(x0 + ancho - 15)}
      <path d={`M${x0} ${piso - 6}H${x0 + ancho}`} stroke={papel} strokeWidth="1.2" />
      {/* Ruedas */}
      {[p0, p1].map((p) => (
        <circle key={p.x} cx={p.x} cy={p.y - 1} r="2.6" fill={papel} stroke={tinta} strokeWidth="1.2" />
      ))}
    </g>
  );
}

/**
 * Capa de la cabina: ocupa todo el lienzo para que el translate en % recorra la vía exacta.
 * La animación (.ascensor-cabina en globals.css) baja una vez y se queda en la estación.
 */
export function CabinaAscensor({ vista = VISTA_COMPLETA }: { vista?: Vista }) {
  const r = recorrido(vista);
  return (
    <div
      aria-hidden="true"
      className="ascensor-cabina pointer-events-none absolute inset-0"
      style={{ ['--sube-x' as string]: r.x, ['--sube-y' as string]: r.y }}
    >
      <svg viewBox={viewBox(vista)} className="h-full w-full">
        <Cabina />
      </svg>
    </div>
  );
}
