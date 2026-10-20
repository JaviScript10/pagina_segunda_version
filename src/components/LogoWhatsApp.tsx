/**
 * Logo oficial de WhatsApp (glifo verde #25D366), tal como viene en el WhatsApp Brand Resource
 * Center de Meta: public/marcas/whatsapp/Digital_Glyph_Green_RGB_2026.svg, sin modificar.
 * Se usa como imagen para no poder recolorearlo ni deformarlo: solo se escala, proporción 1:1.
 */
export default function LogoWhatsApp({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/marcas/whatsapp/Digital_Glyph_Green_RGB_2026.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
