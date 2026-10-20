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

**Para quién:** dueños de pymes y emprendimientos de todo Chile (tiendas, servicios, comercios,
empresas que necesitan una herramienta interna) que quieren un sitio o un sistema a medida y hablar
directo con la persona que lo construye. La base es Valparaíso y el trabajo es remoto: Valparaíso es
la identidad del estudio, no el límite de su alcance.

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
- Nada de fotos de oficinas o equipos, ni de stock ni generadas con IA. El sitio no lleva foto
  personal (decisión de Javier): la presencia de la persona se transmite con la voz en primera
  persona y el trabajo real.
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

**Dónde se gasta la audacia (solo en un lugar):** la ilustración del hero, "Cerro de calamina".
Un cerro de Valparaíso dibujado a mano en SVG, 100% vectorial: casas escalonadas en terrazas con
calamina corrugada, ventanas, balcones y una escalera; postes con 2 o 3 cables en catenaria real,
quietos; y un ascensor con sus rieles inclinados, viaducto, estaciones y una cabina. Es lo único
ilustrado del sitio y lo único que se mueve solo: al cargar, la cabina baja una vez hasta la
estación de abajo y se queda ahí. El cerro se apoya en una calle de ancho completo al pie del hero
y sigue hasta el borde de la pantalla: es el suelo de la página, no un cuadro. Todo lo demás es
sobrio y disciplinado.

Reglas de la ilustración:
- Planos de color con línea Tinta (~1,6 px), sin degradados, sombras ni texturas que no sean la
  calamina. Geometría limpia, nada de trazo tembloroso tipo boceto.
- Colores del brief (Calamina, Cerro, Ascensor, Papel, Tinta) más un verde sobrio solo para el
  cerro (`--color-verde-cerro`, `#4A7558`). El rojo Ascensor va en la cabina y en uno o dos techos.
- Sin texto dentro de la ilustración. Geometría compartida en `lib/cerro.ts`.

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
| Tinta | `#172033` | Texto principal, líneas de la ilustración del hero, bordes fuertes |
| Calamina | `#F2B807` | Acento de marca: casas de la ilustración y fachada de un proyecto. El texto sobre Calamina siempre va en Tinta |
| WhatsApp | `#25D366` | **Excepción:** el verde oficial vive solo dentro del logo oficial de WhatsApp. Ver "Botones de WhatsApp" abajo |

Botones de WhatsApp (excepción de marca):
- Botones de WhatsApp del sitio, y solo estos: el flotante (con su chat), el "Cotizar" de cada
  precio (incluido el soporte de PC) y el de la sección Contacto. En el footer el número queda
  como dato, sin link. El hero y los cierres de `/proyectos` y `/faq` usan `.btn-principal`
  (Tinta, sin logo) hacia "Ver proyectos" o "Ir a contacto".
- Estilo de los botones de WhatsApp (incluidos los chips del chat): fondo
  Tinta, texto blanco (16:1), sin borde, y a la izquierda el **logo oficial** de WhatsApp a color.
  Clase `.btn-whatsapp`. Sobre fondos oscuros, `.btn-whatsapp-inverso`: fondo blanco y texto Tinta.
- El logo es el archivo oficial del WhatsApp Brand Resource Center de Meta
  (`public/marcas/whatsapp/Digital_Glyph_Green_RGB_2026.svg`), copiado sin cambios y usado como
  imagen (`LogoWhatsApp`): no se recolorea, no se deforma (1:1), no se rellena ni se combina con
  otros dibujos. Javier aceptó los términos de uso de marca de Meta al descargarlo (2026-10-20).
- El glifo oficial 2026 es la burbuja en contorno con el teléfono, ambos en `#25D366` sobre fondo
  transparente. Meta no publica una versión con la burbuja rellena; no se fabrica una.
- Botón flotante: círculo blanco de 60 px con el logo oficial a color al centro (34 px) y una
  **sombra suave** (`0 10px 28px -8px` Tinta al 35% + `0 2px 6px -1px` al 12%). Es la única
  excepción a "sombras casi inexistentes": el botón flota sobre todo el contenido y tiene que
  separarse de cualquier fondo. Abre el chat, cuya primera opción es "Escribir directo por WhatsApp".
| Cerro | `#1F5FA8` | Links y elementos interactivos secundarios |
| Ascensor | `#C33C2E` | Uso puntual (un detalle por sección como máximo). Nunca como fondo grande. En el hero: la cabina del ascensor |
| Verde cerro | `#4A7558` | El cerro de la ilustración del hero y el acento de un proyecto (ver abajo). Con texto Papel da 5,3:1 |

Acentos de proyecto: cada proyecto real tiene un color como fachada del cerro (`accent` en
`data/projects.ts`, mapa en `lib/acento.ts`): un bloque de ese color con calamina corrugada detrás
de su captura y su etiqueta de tipo. PacificoClean = Cerro, ClipControl = Calamina, Automatizador
= Ascensor, QEPD = Verde cerro. Texto sobre el acento: Tinta sobre Calamina (9,0:1) y Papel sobre
Cerro (6,4:1), Ascensor (5,2:1) y Verde cerro (5,3:1). Es la única excepción a "Ascensor nunca
como fondo grande": el bloque es un marco alrededor de la captura, no el fondo de una sección.

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
- Sombras casi inexistentes. La separación se logra con fondo (Niebla vs Papel) y espacio. Única excepción: el botón flotante de WhatsApp (ver "Botones de WhatsApp").
- Las secciones tienen su alto natural. Nada de `min-h-screen` en cada sección.

### Movimiento (criterio Emil Kowalski)

- Un solo momento orquestado: la cabina del ascensor del hero baja una vez al cargar, desde la
  estación de arriba hasta la de abajo, en 3 s con `cubic-bezier(0.37, 0, 0.63, 1)` (easeInOutSine)
  y 400 ms de espera, y se queda detenida. Se anima con `transform` sobre una capa HTML encima del
  SVG, para que corra en el compositor. Los cables y el resto de la ilustración no se mueven.
- Interacciones: 150–220 ms, `ease-out` (por ejemplo `cubic-bezier(0.23, 1, 0.32, 1)`).
  Botones con `scale(0.97)` al presionar.
- Prohibido: `animate-bounce`, `animate-ping`, `animate-pulse` decorativo, contadores animados,
  fade-in al hacer scroll en cada sección, canvas de partículas.
- `prefers-reduced-motion`: la cabina aparece quieta en la estación de abajo y se quitan todas
  las transiciones no esenciales.

---

## 5. Estructura de la home

Orden y propósito de cada sección:

1. **Hero:** qué hago y desde dónde, la ilustración del cerro con el ascensor y el botón principal
   "Ver proyectos" (fondo Tinta, texto blanco). El hero no lleva botón de WhatsApp.
2. **Proyectos:** 3 casos reales destacados y un link a `/proyectos`.
3. **Qué hago y cuánto cuesta:** servicios con precio "desde" y plazo.
4. **Cómo trabajo:** 4 pasos. Es una secuencia real, así que aquí sí van números.
5. **Contacto:** WhatsApp como principal y email como alternativa, con tiempo de respuesta real.

El soporte y hardware de PC se mantiene, pero como un bloque secundario "También hago…" dentro de
la sección 3, no como pestaña al mismo nivel que el desarrollo web. Al ser presencial, se aclara que
es solo para la zona de Valparaíso y alrededores.

### Hero (escritorio)

```
+--------------------------------------------------------------------------+
| CiberByte                                  Proyectos  Precios  Contacto  |
|                                                        casas de fondo _.-|
|  Sitios web y sistemas a medida,                     _.-'  [ ][ ]  /[]|[]|
|  desde Valparaíso.                               _.-'  [ ][ ]  //  [][][]|
|                                              _.-'           //  [] [] []|
|  Para negocios de todo Chile. Hablas     poste~~~~~cables~~~//~~~poste  |
|  directo con quien lo construye.            |   [cabina]  //  [] [] [] |
|                                             |  estación  // rieles      |
|  [ Ver proyectos ]                          |  [ ∩ ]  //  [] [] [] []  |
|==========================================================================| ← calle
+--------------------------------------------------------------------------+
```

- Texto alineado a la izquierda. La página entera se alinea a la izquierda salvo excepciones
  justificadas.
- La ilustración ocupa la columna derecha, se apoya en la calle (franja de ancho completo al pie
  del hero) y sigue hasta el borde derecho de la pantalla.
- En móvil: título, bajada, botón, y la ilustración debajo, en un recorte más bajo (el ascensor y
  las terrazas) y simplificado (sin el cerro de atrás, dos cables por tramo). Siempre anclada al
  borde derecho de la pantalla, sin margen, igual que en escritorio: si el alto no alcanza para el
  ancho completo, se achica hacia la derecha.

---

## 6. Contenido de proyectos (borrador, Javier confirma)

Cada caso lleva: qué problema había, qué se construyó, stack, tu rol y una captura real.
Sin métricas que no se puedan respaldar.

- **PacificoClean** (Valparaíso): sitio y tienda de artículos de aseo con despacho. Next.js en
  Vercel, con panel de administración para que los dueños editen productos, fotos y precios.
- **ClipControl** (proyecto de título, Tresmontes Lucchetti): sistema de entrega de beneficios
  con código QR para 800–1.000 trabajadores. Proyecto en equipo: Javier fue Scrum Master y líder
  de backend (FastAPI + Supabase/PostgreSQL, 25+ endpoints). Panel React por Maximiliano Casanova
  y app Ionic con escáner QR por Camilo Caballero. Publicación autorizada. Siempre se presenta
  como proyecto en equipo, con crédito a ambos.
- **QEPD:** sistema de gestión de cementerio en Django, con mapas de Google, avisos por WhatsApp,
  exportación a Excel, validación de RUT y programación de mantenciones.
- **Automatizador de cartas** (empresa de distribución eléctrica): herramienta interna en
  Streamlit que genera cartas de respuesta a reclamos a partir de más de 30 cartas tipo en Word, con
  login y panel de estadísticas. Publicación autorizada. Las capturas no muestran datos reales
  de clientes (nombres, RUT, direcciones, números de cliente): se usan datos de ejemplo o se
  difuminan.

**Ejercicios de diseño (sección aparte en `/proyectos`):** las 6 maquetas antiguas, corregidas
(direcciones y teléfonos de ejemplo coherentes, sin "Juan Pérez", precios en formato chileno,
sin voseo, imágenes correctas, fechas actuales), rotuladas como ejercicios.

Los datos de proyectos viven en un solo archivo `data/projects.ts` que usan la home y `/proyectos`.

---

## 7. Precios (propuesta, Javier confirma)

| Servicio | Desde | Plazo típico | Incluye como base |
|---|---|---|---|
| Landing page | $180.000 | 1–2 semanas | Una página, diseño a medida, botón de WhatsApp, formulario, SEO básico |
| Sitio corporativo | $380.000 | 2–3 semanas | Hasta 5 páginas, textos editables, SEO local |
| Tienda online | $650.000 | 3–5 semanas | Catálogo, carrito, pago online, panel para editar productos y precios |
| Sistema o app a medida | $900.000 | Según alcance | Cotización tras una reunión |
| Mantención mensual | $35.000/mes | — | Actualizaciones, respaldo, cambios menores |
| Soporte de PC (Valparaíso) | $25.000 | — | Mantención preventiva o formateo con respaldo |

- Dominio y hosting se cobran aparte, al costo.
- Forma de pago: 50% al inicio y 50% al entregar (igual que en Términos).
- Garantía: 30 días de garantía desde la publicación: corrijo errores técnicos y ajustes menores de lo entregado. Las funciones nuevas o los cambios de diseño se cotizan aparte.
  Mismo texto en Términos, "Cómo trabajo" y el FAQ.
- Pendiente: definir si los valores son "+ IVA" o exentos según cómo factura CiberByte.

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
- Un solo botón flotante, en el layout (aparece en todas las páginas). Abre el ChatDock arreglado,
  que reemplaza al menú de mensajes rápidos y siempre termina en WhatsApp. Arreglos obligatorios
  del ChatDock: quitar toda mención a "Velocity", corregir el mapeo de los chips de presupuesto
  (usar el texto exacto del chip cuando coincide), arreglar el bloqueo de scroll para que no
  salte al inicio al cerrar, cambiar el aviso "Mensaje enviado" por "Abriendo WhatsApp…", usar el
  número de `lib/site.ts` sin número de respaldo falso, escapar HTML antes de renderizar, tomar
  precios y servicios desde `data/pricing.ts`, y adoptar los tokens de color del brief en vez de
  su paleta morada propia.
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

## 11. Decisiones

Resueltas:
- [x] Sin foto personal.
- [x] Alcance nacional (todo Chile), con base en Valparaíso.
- [x] Permisos para mostrar ClipControl y el automatizador de cartas: autorizados.
- [x] Se mantiene el soporte de PC, como servicio secundario y presencial.
- [x] El ChatDock se arregla y se mantiene (ver sección 9).

Pendientes:
- [ ] Confirmar la tabla de precios (sección 7) y el tema del IVA.
- [ ] Capturas reales de cada proyecto (con datos de ejemplo donde haga falta).
- [ ] ¿Se conecta `ciberbyte.cl` a Vercel?
