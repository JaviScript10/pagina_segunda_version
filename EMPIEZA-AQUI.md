# 🎯 EMPIEZA AQUÍ - CIBERBYTE.CL

## 👋 ¡Bienvenido!

Has recibido tu sitio web completo para **CiberByte.cl**. Esta guía te mostrará exactamente qué hacer ahora.

---

## 📦 PASO 1: DESCARGAR Y DESCOMPRIMIR (2 minutos)

### En Windows:

1. **Descarga** el archivo `ciberbyte-web-completo.tar.gz`
2. **Click derecho** → Extraer todo
   - Si no funciona, descarga [7-Zip](https://www.7-zip.org/)
3. Tendrás una carpeta `ciberbyte-web`

### En Mac/Linux:

```bash
tar -xzf ciberbyte-web-completo.tar.gz
```

---

## 📚 PASO 2: LEE ESTO PRIMERO (5 minutos)

Abre estos archivos en orden:

1. **`INICIO-RAPIDO.md`** ← Empieza aquí
2. **`README.md`** ← Documentación completa
3. **`DOMINIO-SETUP.md`** ← Cuando vayas a configurar el dominio

---

## 💻 PASO 3: INSTALAR Y PROBAR (10 minutos)

### Necesitas tener instalado:
- **Node.js 18+** → [Descargar aquí](https://nodejs.org/)

### Comandos:

```bash
# 1. Ve a la carpeta del proyecto
cd ciberbyte-web

# 2. Instala dependencias
npm install

# 3. Ejecuta en modo desarrollo
npm run dev
```

### Resultado:
Abre tu navegador en: **http://localhost:3000**

¡Deberías ver tu sitio funcionando! 🎉

---

## ✏️ PASO 4: PERSONALIZACIÓN BÁSICA (30 minutos)

### 4.1 Cambiar número de WhatsApp

**Archivo**: `src/components/WhatsAppButton.tsx`

Busca la línea 8:
```typescript
const phoneNumber = '56912345678'; // ← CAMBIA ESTO
```

Pon tu número con código de país (sin +)
Ejemplo: `56912345678` para +56 9 1234 5678

### 4.2 Cambiar email de contacto

**Archivo**: `src/components/Contact.tsx`

Busca alrededor de la línea 30:
```typescript
value: 'contacto@ciberbyte.cl', // ← CAMBIA ESTO
```

### 4.3 Cambiar textos principales

**Hero (Primera sección)**:
- Archivo: `src/components/Hero.tsx`
- Cambia el título, descripción, estadísticas

**Servicios**:
- Archivo: `src/components/Services.tsx`
- Modifica precios, descripciones, características

**Nosotros**:
- Archivo: `src/components/About.tsx`
- Cambia la historia, valores, estadísticas

### 4.4 Probar cambios

Guarda el archivo y el navegador se actualizará automáticamente (hot reload).

---

## 🚀 PASO 5: SUBIR A INTERNET (15 minutos)

### Opción A: Vercel (GRATIS y RECOMENDADO)

1. **Ve a** [vercel.com](https://vercel.com)
2. **Crea cuenta** (con GitHub, Google o email)
3. Click en **"Add New..." → Project"**
4. **Arrastra la carpeta** `ciberbyte-web` o conecta GitHub
5. Click en **"Deploy"**
6. Espera 2-3 minutos
7. ¡Tu sitio está en línea!

Tu URL temporal será algo como:
`https://ciberbyte-web-xxxxx.vercel.app`

### Opción B: Desde Terminal

```bash
npm install -g vercel
vercel

# Sigue las instrucciones
```

---

## 🌐 PASO 6: CONECTAR TU DOMINIO (30-120 minutos)

### ⚠️ IMPORTANTE: Lee primero `DOMINIO-SETUP.md`

Ese archivo tiene una guía **completa paso a paso** para configurar **ciberbyte.cl**

**Resumen rápido**:

1. En Vercel → Settings → Domains
2. Agregar `ciberbyte.cl` y `www.ciberbyte.cl`
3. Copiar los valores DNS que te muestre
4. Ir a tu proveedor de dominios (001webhospedaje)
5. Configurar registros A y CNAME
6. Esperar 30 min - 2 horas
7. ¡SSL se activa automático!

**Detalle completo**: Lee `DOMINIO-SETUP.md`

---

## ✅ CHECKLIST DE LANZAMIENTO

Antes de compartir tu sitio, verifica:

- [ ] Número de WhatsApp cambiado
- [ ] Email de contacto actualizado
- [ ] Textos principales personalizados
- [ ] Preguntas del chatbot actualizadas
- [ ] Sitio probado en móvil
- [ ] Sitio probado en diferentes navegadores
- [ ] Dominio configurado
- [ ] SSL activo (candado 🔒)
- [ ] Todas las secciones revisadas
- [ ] Links de redes sociales actualizados

---

## 🎨 PERSONALIZACIÓN AVANZADA (OPCIONAL)

### Cambiar colores:

**Archivo**: `tailwind.config.js`

```javascript
primary: {
  600: '#0066ff',  // Color principal
}
accent: {
  600: '#0ea5e9',  // Color secundario
}
```

### Agregar tu logo:

1. Pon tu logo en la carpeta `public/`
2. Edita `src/components/Header.tsx`
3. Reemplaza el logo "CB" con tu imagen

### Cambiar fuentes:

**Archivo**: `src/app/layout.tsx`

Busca la línea donde se importa la fuente Inter y cámbiala.

---

## 📞 CONFIGURAR CHATBOT FAQ

**Archivo**: `src/components/Chatbot.tsx`

Busca el array `faqs` (alrededor línea 15) y modifica las preguntas/respuestas:

```typescript
{
  keywords: ['precio', 'costo'],
  answer: 'Tu respuesta personalizada aquí'
}
```

---

## 📊 AGREGAR GOOGLE ANALYTICS (OPCIONAL)

1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Copia tu ID de medición (G-XXXXXXXXXX)
3. Edita `src/app/layout.tsx`
4. Agrega el script de Google Analytics en el `<head>`

---

## 🐛 PROBLEMAS COMUNES

### "npm not found"
**Solución**: Instala Node.js desde [nodejs.org](https://nodejs.org/)

### "Port 3000 already in use"
**Solución**: 
```bash
npm run dev -- -p 3001
```

### No veo mis cambios
**Solución**: 
1. Guarda el archivo (Ctrl+S)
2. Espera 1-2 segundos
3. Refresca el navegador (Ctrl+R o Cmd+R)
4. Si no funciona, detén el servidor (Ctrl+C) y ejecuta `npm run dev` de nuevo

### Error al instalar dependencias
**Solución**:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 PROBAR EN MÓVIL

### Opción 1: DevTools del navegador
1. Presiona F12
2. Click en el ícono de móvil
3. Selecciona diferentes dispositivos

### Opción 2: En tu celular real
1. Con el servidor corriendo (`npm run dev`)
2. En tu celular, abre: `http://TU-IP:3000`
3. Para saber tu IP:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

---

## 🎯 ROADMAP SUGERIDO

### Semana 1:
- [x] Instalar y probar localmente
- [x] Personalizar contenido básico
- [x] Subir a Vercel
- [ ] Configurar dominio

### Semana 2:
- [ ] Agregar proyectos reales
- [ ] Personalizar chatbot
- [ ] Agregar Google Analytics
- [ ] Probar en diferentes dispositivos

### Semana 3:
- [ ] Registrar en Google Search Console
- [ ] Compartir en redes sociales
- [ ] Solicitar feedback
- [ ] Hacer ajustes finales

---

## 💡 TIPS PROFESIONALES

1. **Haz backups** de tus cambios regularmente
2. **Usa Git** para control de versiones (opcional pero recomendado)
3. **Prueba TODO** antes de compartir
4. **Optimiza imágenes** antes de subirlas (usa [TinyPNG](https://tinypng.com/))
5. **No modifiques** archivos de configuración sin saber qué hacen
6. **Lee la documentación** cuando tengas dudas
7. **Actualiza dependencias** cada 2-3 meses (`npm update`)

---

## 📚 RECURSOS ADICIONALES

### Documentación incluida:
- **INICIO-RAPIDO.md** - Comandos y personalización básica
- **README.md** - Guía técnica completa
- **DOMINIO-SETUP.md** - Configurar dominio paso a paso
- **RESUMEN-COMPLETO.md** - Características detalladas

### Recursos externos:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🆘 ¿NECESITAS AYUDA?

### 1. Lee primero la documentación
La mayoría de dudas están respondidas en:
- README.md
- DOMINIO-SETUP.md
- Este archivo

### 2. Busca el error en Google
Copia el error exacto y búscalo

### 3. Verifica los archivos de configuración
Asegúrate de no haber modificado accidentalmente algo

### 4. Reinicia el servidor
```bash
# Detén con Ctrl+C
# Luego:
npm run dev
```

---

## 🎉 ¡ESTÁS LISTO!

Sigue estos pasos en orden y en 1-2 horas tendrás tu sitio profesional en línea.

**Recuerda**:
1. ✅ Descomprimir
2. ✅ Instalar (`npm install`)
3. ✅ Probar local (`npm run dev`)
4. ✅ Personalizar contenido
5. ✅ Subir a Vercel
6. ✅ Configurar dominio
7. ✅ ¡Lanzar! 🚀

---

## 📞 ÚLTIMA RECOMENDACIÓN

**No te saltes los pasos**. Cada uno es importante.

Si algo no funciona, vuelve atrás y verifica que hiciste todo correctamente.

---

**¡Éxito con tu nuevo sitio web!** 🎊

**CiberByte - Transformando Ideas en Realidad Digital**
