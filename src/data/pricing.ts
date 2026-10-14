// Tabla única de precios (DESIGN.md §7). La usan la home, el FAQ y el ChatDock.
// Propuesta: Javier confirma valores e IVA antes de publicar.

export type ServiceId =
  | 'landing'
  | 'corporativo'
  | 'tienda'
  | 'medida'
  | 'mantencion'
  | 'soporte-pc';

export type ServiceKind = 'web' | 'recurrente' | 'presencial';

export interface PricingItem {
  id: ServiceId;
  name: string;
  kind: ServiceKind;
  /** Precio "desde" en pesos chilenos. */
  from: number;
  /** Unidad del cobro cuando no es pago único. */
  per?: 'mes';
  /** Plazo típico; null cuando no aplica. */
  timeline: string | null;
  includes: string;
  /** Aclaración de alcance, por ejemplo zona de cobertura. */
  scope?: string;
}

export interface Pricing {
  items: PricingItem[];
  /** Nota sobre IVA. Pendiente: "+ IVA" o exento según cómo factura CiberByte. */
  ivaNote: string;
  terms: string[];
}

export const HOSTING_TERM = 'Dominio y hosting se cobran aparte, al costo.';
export const PAYMENT_TERM = 'Forma de pago: 50% al inicio y 50% al entregar.';

export const pricing: Pricing = {
  items: [
    {
      id: 'landing',
      name: 'Landing page',
      kind: 'web',
      from: 180_000,
      timeline: '1–2 semanas',
      includes: 'Una página, diseño a medida, botón de WhatsApp, formulario, SEO básico',
    },
    {
      id: 'corporativo',
      name: 'Sitio corporativo',
      kind: 'web',
      from: 380_000,
      timeline: '2–3 semanas',
      includes: 'Hasta 5 páginas, textos editables, SEO local',
    },
    {
      id: 'tienda',
      name: 'Tienda online',
      kind: 'web',
      from: 650_000,
      timeline: '3–5 semanas',
      includes: 'Catálogo, carrito, pago online, panel para editar productos y precios',
    },
    {
      id: 'medida',
      name: 'Sistema o app a medida',
      kind: 'web',
      from: 900_000,
      timeline: 'Según alcance',
      includes: 'Cotización tras una reunión',
    },
    {
      id: 'mantencion',
      name: 'Mantención mensual',
      kind: 'recurrente',
      from: 35_000,
      per: 'mes',
      timeline: null,
      includes: 'Actualizaciones, respaldo, cambios menores',
    },
    {
      id: 'soporte-pc',
      name: 'Soporte de PC',
      kind: 'presencial',
      from: 25_000,
      timeline: null,
      includes: 'Mantención preventiva o formateo con respaldo',
      scope: 'Solo Valparaíso y alrededores',
    },
  ],
  ivaNote: 'Valores referenciales',
  terms: [HOSTING_TERM, PAYMENT_TERM],
};

/** 180000 → "$180.000". Formato fijo para que servidor y cliente rendericen igual. */
export function formatCLP(value: number): string {
  return '$' + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** "desde $35.000/mes" */
export function formatFrom(item: PricingItem): string {
  return `desde ${formatCLP(item.from)}${item.per ? `/${item.per}` : ''}`;
}

export function getService(id: ServiceId): PricingItem {
  const item = pricing.items.find((i) => i.id === id);
  if (!item) throw new Error(`Servicio desconocido: ${id}`);
  return item;
}
