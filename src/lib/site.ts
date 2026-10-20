// Fuente única de datos del sitio. Cambiar aquí cuando ciberbyte.cl apunte a Vercel.
export const SITE_URL = 'https://ciberbyte.vercel.app';

export const WHATSAPP_NUMBER = '56934341783';
export const WHATSAPP_DISPLAY = '+56 9 3434 1783';

export const CONTACT_EMAIL = 'contacto@ciberbyte.cl';

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
