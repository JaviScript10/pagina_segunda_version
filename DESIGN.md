# CiberByte — Brief de diseño (rediseño 2026)

Este archivo es la fuente de verdad para el rediseño del sitio. Cualquier sesión de Claude Code
(y cualquier skill: impeccable, redesign-existing-projects, emil-design-eng, review-animations)
debe leerlo antes de proponer o escribir código. Si una decisión de este archivo choca con la
regla por defecto de un skill, gana este archivo.

---

## 1. Qué es esto y para quién

**Qué es:** el sitio de CiberByte, el estudio de desarrollo web de Javier Ruiz, con base en Valparaíso.
No es una agencia ni un equipo grande: es una persona que desarrolla, con colaboradores puntuales.
El sitio tiene que decir eso con orgullo, no esconderlo.

**Para quién:** dueños de pymes y emprendimientos de Valparaíso y la Quinta Región (tiendas,
servicios, comercios de barrio) que necesitan un sitio o una herramienta a medida y quieren hablar
con la persona que la construye.

**Trabajo principal de la página:** que el visitante vea trabajo real en los primeros segundos,
entienda qué cuesta y cuánto demora, y escriba por WhatsApp.

**Diferenciadores reales (usar, no inventar otros):**
- Trato directo con quien desarrolla.
- Base en telecomunicaciones (HFC/FTTH): viene de un rubro donde las cosas tienen que funcionar.
- Estudiante de Ingeniería en Informática (INACAP): se dice con naturalidad, sin disculparse.
- Proyectos reales con clientes y usuarios reales (ver sección 6).

---

## 2. Reglas de honestidad (no negociables)

- Nada de clientes, testimonios, métricas ni contadores inventados.
- Nada de "somos un equipo de desarrolladores y diseñadores". Primera persona singular ("hago",
  "trabajo") o "CiberByte" como marca.
- Nada de fotos de oficinas o equipos generadas con IA. Se usa una foto real de Javier
  o ninguna foto.
- Las maquetas del portafolio antiguo (Sabores del Sur, Verde Nativo, Espacio Urbano, FitChile,
  Café Andino, Innova Gestión) solo pueden aparecer en una sección aparte, rotuladas
  claramente como **ejercicios de diseño**, sin testimonios, sin resultados y sin "inversión".
- No prometer lo que no se ofrece hoy: "soporte 24/7", "backups diarios", "carga en menos
  de 1 segundo" quedan fuera salvo que sean ciertos y medibles.
- Una sola tabla de precios para todo el sitio (sección 7).

---

## 3. Dirección visual

**Idea:** Valparaíso de verdad, no "tecnología genérica". El sitio toma dos cosas del puerto:
el color plano y saturado de las casas de calamina de los cerros, y los cables aéreos que
cruzan las calles (que conectan directo con el pasado de Javier en telecomunicaciones).

**Dónde se gasta la audacia (solo en un lugar):** una línea de cable. Es un único trazo SVG,
dibujado a mano alzada con una leve catenaria, que cruza el hero y termina en el botón de
WhatsApp, como un cable que llega a una casa. Se dibuja una sola vez al cargar. Todo lo demás
es sobrio y disciplinado.

**Lo que este sitio NO es:**
- No es la plantilla SaaS: tarjetas idénticas redondeadas, sombra gris suave en todo, degradados
  de relleno.
- No es "fondo crema + serif de alto contraste + acento terracota".
- No es "fondo casi negro + un acento verde ácido".
- No es un diario con filetes finos y columnas densas.
- No lleva etiquetas en MAYÚSCULAS espaciadas sobre cada título, ni "→" pegado a cada link,
  ni textos tipo "A · B · C".

---

## 4. Tokens

### Color

| Nombre | Hex | Uso |
|---|---|---|
| Niebla | `#E9EEF1` | Fondo general (gris frío de neblina del puerto, no crema) |
| Papel | `#FFFFFF` | Superficies que necesitan separarse del fondo (formulario, capturas) |
| Tinta | `#172033` | Texto principal, cable del hero, bordes fuertes |
| Calamina | `#F2B807` | Acento principal: botón de WhatsApp y nada más que compita con él. El texto sobre Calamina siempre va en Tinta |
| Cerro | `#1F5FA8` | Links y elementos interactivos secundarios |
| Ascensor | `#C33C2E` | Uso puntual (un detalle por sección como máximo). Nunca como fondo grande |

Reglas:
- Definir como variables CSS en `:root` y exponerlas en `tailwind.config` (`niebla`, `tinta`, etc.).
  No usar `blue-600`, `primary-600`, `emerald-600` ni otros colores sueltos de Tailwind.
- Contraste mínimo AA en todo texto. Revisarlo con Playwright o con la herramienta del skill.
- Sin degradados decorativos.

### Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Títulos | **Archivo**, variable, con eje de ancho (expandido, peso 700–800) | Recuerda la rotulación pintada de micros y ascensores. Es el carácter de la página |
| Texto | **Atkinson Hyperlegible** (400 / 700) | Clara y legible, distinta de la de títulos |

Reglas:
- Cargar ambas con `next/font/google` y aplicar las variables en `<html>`. Eliminar Inter y el
  `@font-face` roto de `globals.css`.
- Escala tipográfica clara (por ejemplo base 18px en escritorio, razón ~1.25). Largo de línea
  máximo ~70 caracteres.
- Los títulos no resaltan una sola palabra en otro color o peso.
- Mayúsculas solo donde el contenido lo pide, no como estilo de etiqueta.

### Forma y espacio

- Radios según jerarquía, no uno igual para todo: botones 8px, capturas de proyecto 4px dentro
  de un marco de navegador simple, bloques grandes de sección sin radio.
- Sombras casi inexistentes. La separación se logra con fondo (Niebla vs Papel) y espacio.
- Las secciones tienen su alto natural. Nada de `min-h-screen` en cada sección.

### Movimiento (criterio Emil Kowalski)

- Un solo momento orquestado: el dibujo del cable del hero (≤ 900 ms, una vez).
- Interacciones: 150–220 ms, `ease-out` (por ejemplo `cubic-bezier(0.23, 1, 0.32, 1)`).
  Botones con `scale(0.97)` al presionar.
- Prohibido: `animate-bounce`, `animate-ping`, `animate-pulse` decorativo, contadores animados,
  fade-in al hacer scroll en cada sección, canvas de partículas.
- `prefers-reduced-motion`: el cable aparece ya dibujado y se quitan todas las transiciones
  no esenciales.

---

## 5. Estructura de la home

Orden y propósito de cada sección:

1. **Hero:** quién soy y qué hago, una captura real de proyecto y el CTA de WhatsApp.
2. **Proyectos:** 3 casos reales destacados y un link a `/proyectos`.
3. **Qué hago y cuánto cuesta:** servicios con precio "desde" y plazo.
4. **Cómo trabajo:** 4 pasos. Es una secuencia real, así que aquí sí van números.
5. **Sobre mí:** foto real, historia corta (telecomunicaciones → desarrollo), estudios.
6. **Contacto:** WhatsApp como principal y email como alternativa, con tiempo de respuesta real.

El soporte y hardware de PC va como un bloque pequeño "También hago…" dentro de la sección 3,
no como pestaña al mismo nivel que el desarrollo web.

### Hero (escritorio)

```
+--------------------------------------------------------------------------+
| CiberByte                               Proyectos  Precios  Sobre mí  ☎ |
|                                                                          |
|  Hago sitios web para negocios           +---------------------------+   |
|  de Valparaíso y la Quinta Región.       |  captura real de          |   |
|                                          |  PacificoClean            |   |
|  Soy Javier Ruiz. Desarrollo cada        |  (marco navegador simple) |   |
|  proyecto yo mismo y hablas conmigo      +---------------------------+   |
|  de principio a fin.                                                     |
|                                                                          |
|  [ Escríbeme por WhatsApp ]  Ver proyectos                               |
|        \_______________________________/  ← cable SVG que llega al botón |
+--------------------------------------------------------------------------+
```

- Texto alineado a la izquierda. La página entera se alinea a la izquierda salvo excepciones
  justificadas.
- En móvil: título, bajada, botón, y la captura debajo. El cable se simplifica a un tramo corto.

---

## 6. Contenido de proyectos (borrador, Javier confirma)

Cada caso lleva: qué problema había, qué se construyó, stack, tu rol y una captura real.
Sin métricas que no se puedan respaldar.

- **PacificoClean** (Valparaíso): sitio y tienda de artículos de aseo con despacho. Next.js en
  Vercel, con panel de administración para que los dueños editen productos, fotos y precios.
- **ClipControl** (proyecto de título, Tresmontes Lucchetti): sistema de entrega de beneficios
  con código QR para 800–1.000 trabajadores. Proyecto en equipo: Javier fue Scrum Master y líder
  de backend (FastAPI + Supabase/PostgreSQL, 25+ endpoints). Panel React por Maximiliano Casanova
  y app Ionic con escáner QR por Camilo Caballero. ⚠️ Confirmar que se puede publicar y nombrar a
  la empresa, y dar crédito al equipo.
- **QEPD:** sistema de gestión de cementerio en Django, con mapas de Google, avisos por WhatsApp,
  exportación a Excel, validación de RUT y programación de mantenciones.
- **Automatizador de cartas** (empresa de distribución eléctrica): herramienta interna en
  Streamlit que genera cartas de respuesta a reclamos desde plantillas Word (13+ categorías), con
  login y panel de estadísticas. ⚠️ Es una herramienta interna: confirmar qué se puede mostrar
  y anonimizar datos en las capturas.

**Ejercicios de diseño (sección aparte en `/proyectos`):** las 6 maquetas antiguas, corregidas
(direcciones y teléfonos de ejemplo coherentes, sin "Juan Pérez", precios en formato chileno,
sin voseo, imágenes correctas, fechas actuales), rotuladas como ejercicios.

Los datos de proyectos viven en un solo archivo `data/projects.ts` que usan la home y `/proyectos`.

---

## 7. Precios (pendiente: Javier define una sola tabla)

| Servicio | Desde | Plazo típico |
|---|---|---|
| Landing page | [definir] | [definir] |
| Sitio corporativo | [definir] | [definir] |
| Tienda online | [definir] | [definir] |
| Sistema o app a medida | Cotización | Según alcance |
| Mantención mensual | [definir] | — |

Hoy el chat, el FAQ y el portafolio muestran precios distintos. La tabla final vive en
`data/pricing.ts` y la usan la home, el FAQ y cualquier otro lugar.

---

## 8. Voz y textos

- Primera persona, tuteo, español de Chile natural, sin modismos forzados.
- Frases concretas en vez de promesas genéricas.
  - ❌ "Transformamos ideas en experiencias digitales excepcionales."
  - ✅ "Hago sitios rápidos que se ven bien en el celular y que tú puedes actualizar."
- Los botones dicen exactamente qué pasa: "Escríbeme por WhatsApp", "Ver proyectos",
  "Enviar por WhatsApp". La misma acción se llama igual en todo el sitio.
- Sin emojis en la interfaz.

---

## 9. Base técnica (hacer antes o junto con el rediseño)

- `alternates.canonical` fuera del layout raíz. Cada página declara su `metadata`
  (título y canonical).
- `/proyectos/page.tsx` como componente de servidor con `metadata`. Grilla y modal en un
  componente cliente aparte. Quitar `ChatDock` de esa página.
- Links del Header y Footer como `/#seccion` para que funcionen desde las subpáginas.
  El link "Proyectos" lleva a `/proyectos`.
- `scroll-padding-top` igual a la altura del header. `scroll-behavior: smooth` solo dentro
  de `prefers-reduced-motion: no-preference`.
- Todas las imágenes con `next/image`. Eliminar `fondo1.jpg` e `historia.jpg`.
- `sitemap.ts` con rutas reales (`/`, `/proyectos`, `/faq`, `/terminos`, `/privacidad`,
  `/cookies`), sin anclas `#`.
- Dominio: hasta que `ciberbyte.cl` apunte a este proyecto, `metadataBase` y las URLs absolutas
  usan una sola constante (`SITE_URL`) para poder cambiarlo en un solo lugar.
- Botón de WhatsApp en el layout (aparece en todas las páginas). Un solo botón flotante.
- Modales: cierran con Escape, bloquean el scroll del fondo, atrapan el foco, `role="dialog"`.
- Tarjetas clicables como `<button>` o `<a>`, nunca `div` con `onClick`.
- Políticas de privacidad y cookies reescritas según lo que el sitio realmente hace (Vercel
  Analytics, que no usa cookies; el formulario envía por WhatsApp y no guarda datos).

---

## 10. Cómo trabajar este rediseño

1. Leer este archivo completo.
2. Auditoría con `redesign-existing-projects` contra este brief. Primero la lista de problemas,
   sin cambiar código.
3. Proponer el plan por secciones y esperar aprobación.
4. Implementar de a una sección. Después de cada una, capturas con Playwright en 390px y
   1440px de ancho, autocrítica contra este brief y corrección.
5. Pasada final de movimiento con `review-animations`.
6. Lighthouse móvil y revisión de accesibilidad (teclado, contraste, reduced motion).
7. Commits pequeños en la rama `rediseno`, con mensajes descriptivos. Nunca trabajar
   en `main`.

---

## 11. Decisiones pendientes de Javier

- [ ] Tabla de precios final (sección 7).
- [ ] Foto real para "Sobre mí".
- [ ] Permisos para mostrar ClipControl y el automatizador de cartas.
- [ ] Capturas reales de cada proyecto.
- [ ] ¿Se mantiene el soporte de PC como servicio?
- [ ] ¿Se conecta `ciberbyte.cl` a Vercel?
- [ ] ¿Se mantiene el ChatDock (arreglado) o se elimina?
