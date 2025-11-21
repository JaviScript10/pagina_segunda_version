# 🌐 Guía Completa: Configurar ciberbyte.cl en Vercel

## 📋 Resumen
Esta guía te llevará paso a paso para configurar tu dominio **ciberbyte.cl** y que apunte a tu sitio en Vercel.

---

## ✅ Prerrequisitos

- [x] Dominio comprado (ciberbyte.cl)
- [x] Cuenta en Vercel
- [x] Proyecto subido a Vercel
- [x] Acceso al panel de tu proveedor de dominios

---

## 🚀 Parte 1: Subir Proyecto a Vercel

### Opción A: Desde la Web

1. **Ir a [vercel.com](https://vercel.com)**
2. Hacer clic en **"Add New..." → Project**
3. **Import Git Repository** o **"Deploy from GitHub"**
4. Seleccionar el repositorio `ciberbyte-web`
5. Configurar:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
6. Hacer clic en **"Deploy"**
7. Esperar 2-3 minutos ✅

Tu sitio estará en: `https://ciberbyte-web-xxxxx.vercel.app`

### Opción B: Desde Terminal

```bash
npm install -g vercel
cd ciberbyte-web
vercel

# Seguir las instrucciones en pantalla
```

---

## 🌐 Parte 2: Agregar Dominio Personalizado en Vercel

### Paso 1: Ir a Settings

1. En Vercel, abre tu proyecto **ciberbyte-web**
2. Clic en **"Settings"** (arriba derecha)
3. Clic en **"Domains"** (menú lateral)

### Paso 2: Agregar Dominios

#### Agregar dominio principal:

1. En el campo de texto, escribe: `ciberbyte.cl`
2. Clic en **"Add"**
3. Vercel te mostrará información de configuración DNS

#### Agregar dominio www:

1. Clic en **"Add"** nuevamente
2. Escribe: `www.ciberbyte.cl`
3. Clic en **"Add"**

### Paso 3: Obtener Datos DNS

Vercel te mostrará algo como:

**Para ciberbyte.cl:**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

**Para www.ciberbyte.cl:**
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

> ⚠️ **IMPORTANTE**: Anota estos valores exactos que te muestre Vercel

---

## ⚙️ Parte 3: Configurar DNS en tu Proveedor

### Si tu dominio está en **001webhospedaje.com**:

1. **Iniciar sesión**:
   - Ve a: https://administrable.cl/panel
   - Inicia sesión con tus credenciales

2. **Ir a tu dominio**:
   - Clic en **"Mis Servicios"** → **"Mis Productos/Servicios"**
   - Busca `ciberbyte.cl`
   - Clic en el dominio

3. **Administrar DNS**:
   - Busca **"Administrar DNS"** o **"Zona DNS"**
   - Clic para entrar al editor

4. **Editar registros existentes** (o crear nuevos):

   **Registro A** (para ciberbyte.cl):
   ```
   Tipo: A
   Nombre/Host: @ (o dejar vacío)
   Valor/Apunta a: 76.76.21.21  (el que te dio Vercel)
   TTL: 3600 (o automático)
   ```

   **Registro CNAME** (para www.ciberbyte.cl):
   ```
   Tipo: CNAME
   Nombre/Host: www
   Valor/Apunta a: cname.vercel-dns.com  (el que te dio Vercel)
   TTL: 3600 (o automático)
   ```

5. **Guardar cambios** ✅

---

### Si tu dominio está en **otro proveedor** (GoDaddy, Hostinger, etc.):

El proceso es similar:

1. Iniciar sesión en tu proveedor
2. Buscar "DNS Management" o "Administrar DNS"
3. Editar o agregar los mismos registros (A y CNAME)
4. Guardar

---

## ⏰ Parte 4: Esperar Propagación DNS

### ¿Cuánto tarda?

- **Mínimo**: 5-10 minutos
- **Promedio**: 1-2 horas
- **Máximo**: hasta 48 horas (raro)

### ¿Cómo verificar?

#### Opción 1: Verificar en Vercel

1. Ve a **Settings → Domains** en Vercel
2. Haz clic en **"Refresh"** cada 15-30 minutos
3. Cuando veas ✅ **"Valid Configuration"** = ¡Listo!

#### Opción 2: Herramienta online

1. Ve a: https://dnschecker.org/
2. Ingresa: `ciberbyte.cl`
3. Selecciona tipo: **A**
4. Debería mostrar: `76.76.21.21` (o la IP que te dio Vercel)
5. Cuando salgan muchas ✅ verdes en el mundo = ¡Propagado!

#### Opción 3: Terminal

```bash
# En Mac/Linux
dig ciberbyte.cl

# En Windows PowerShell
nslookup ciberbyte.cl
```

---

## 🔒 Parte 5: Certificado SSL (HTTPS)

### ¡Automático! 🎉

Vercel activa SSL **automáticamente** cuando:
- Los DNS están configurados correctamente
- El dominio está verificado

Verás en Vercel:
```
ciberbyte.cl
✅ Valid Configuration
🔒 SSL Certificate: Active
```

Esto puede tardar **5-10 minutos** después de que el DNS esté verificado.

---

## ✅ Parte 6: Verificación Final

### Prueba estos enlaces:

1. http://ciberbyte.cl → Debe redirigir a https://ciberbyte.cl ✅
2. http://www.ciberbyte.cl → Debe redirigir a https://ciberbyte.cl ✅
3. https://ciberbyte.cl → Debe cargar tu sitio ✅
4. https://www.ciberbyte.cl → Debe cargar tu sitio ✅

### Checklist Final:

- [x] Sitio carga en ciberbyte.cl
- [x] Sitio carga en www.ciberbyte.cl
- [x] Candado 🔒 (HTTPS) aparece en el navegador
- [x] No hay advertencias de seguridad
- [x] Todos los elementos cargan correctamente

---

## 🐛 Solución de Problemas

### Problema 1: "DNS Configuration Error" en Vercel

**Solución**:
1. Verifica que los valores DNS estén exactos
2. Espera 1-2 horas más
3. Haz clic en "Refresh" en Vercel
4. Si persiste después de 24h, revisa DNS nuevamente

### Problema 2: "ERR_CONNECTION_REFUSED"

**Solución**:
1. Los DNS aún no han propagado
2. Espera 1-2 horas más
3. Limpia caché DNS:
   ```bash
   # Mac
   sudo dscacheutil -flushcache

   # Windows
   ipconfig /flushdns
   ```

### Problema 3: "Not Secure" / Sin HTTPS

**Solución**:
1. Espera 10-15 minutos después de verificación DNS
2. En Vercel → Domains → Clic en el dominio → "Renew Certificate"
3. Espera otros 10 minutos

### Problema 4: Dominio muestra sitio antiguo

**Solución**:
1. Limpia caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
2. Prueba en modo incógnito
3. Prueba en otro navegador

---

## 📞 Contacto de Emergencia

Si después de seguir todos los pasos algo no funciona:

1. **Soporte Vercel**: https://vercel.com/help
2. **Soporte 001webhospedaje**: https://administrable.cl/panel/submitticket.php
3. **Comunidad**: https://github.com/vercel/next.js/discussions

---

## 🎯 Resumen de Comandos Útiles

```bash
# Verificar DNS
dig ciberbyte.cl
nslookup ciberbyte.cl

# Limpiar caché DNS
# Mac:
sudo dscacheutil -flushcache

# Windows:
ipconfig /flushdns

# Verificar certificado SSL
curl -I https://ciberbyte.cl
```

---

## ⏱️ Timeline Esperado

| Tiempo | Acción |
|--------|--------|
| 0 min | Configuras DNS en tu proveedor |
| 5-30 min | DNS comienza a propagar |
| 30 min - 2h | DNS completamente propagado |
| +10 min | Vercel verifica y activa SSL |
| **Total: 40 min - 2h 30m** | ✅ Todo funcionando |

---

**¡Listo! Tu sitio debería estar funcionando en ciberbyte.cl** 🎉

Si necesitas ayuda, no dudes en contactarnos.
