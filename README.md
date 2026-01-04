# Instituto de la IA - Instituto de la Inteligencia Artificial

## Información Institucional

**Nombre Completo:** Instituto de la Inteligencia Artificial  
**Acrónimo:** Instituto de la IA  
**Sitio Web:** https://institutodelaia.com  
**Panel:** https://panel.institutodelaia.com

## SEO y Metadata

### Dashboard (Panel de Estudiantes)
**Título del Sitio:** Instituto de la IA - Panel de Estudiantes | Inteligencia Artificial Aplicada
**Descripción Corta:** Dashboard oficial del Instituto de la Inteligencia Artificial. Accede a tus cursos, herramientas y comunidad exclusiva de líderes en IA.

## Colores Institucionales

### Paleta de Colores
- **Color Primario:** `#001C3C` (Azul Noche)
- **Color Secundario:** `#0066CC` (Azul Tech)
- **Color Accent:** `#3399FF` (Azul Claro)
- **Gradiente Principal:** `linear-gradient(135deg, #001C3C 0%, #0066CC 100%)`

### Colores de Sistema
- **Blanco:** `#FFFFFF`
- **Gris Claro:** `#F5F5F5`
- **Éxito (Verde):** `#10b981`
- **Advertencia (Amarillo):** `#f59e0b`
- **Peligro (Rojo):** `#ef4444`

## Contacto

**Web Principal:** https://institutodelaia.com

## URLs del Panel

- **Mi Cuenta:** https://panel.institutodelaia.com/mi-cuenta/
- **Iniciar Sesión:** https://panel.institutodelaia.com/iniciar-sesion/
- **Panel Access:** https://panel.institutodelaia.com/panel-access/

## Componentes: Headers & Navegación

### Headers (Optimizados Tablet/Mobile 1024px)
Sistema de headers responsivos con menú hamburguesa para dispositivos con ancho menor a 1024px (tablets y móviles).

#### 1. Header Logged In (Usuario Autenticado)
**Archivo:** `Header/header-logged-in-institutodelaia.html`

- **Marca:** Logo/Texto "Instituto de la IA" clickeable (redirige a https://institutodelaia.com).
- **Desktop (>1024px):** Botones visibles:
  - 📊 Dashboard
  - 💬 Soporte (WhatsApp)
  - 🚪 Cerrar Sesión
- **Tablet/Móvil (≤1024px):** Menú hamburguesa lateral con overlay.

#### 2. Header Logged Out (Usuario No Autenticado)
**Archivo:** `Header/header-logged-out-institutodelaia.html`

- **Marca:** Logo/Texto clickeable.
- **Acción:** Botón "Acceso a tu diplomado".
- **Responsive:** Menú hamburguesa en tablet/móvil.

#### 3. Header Web Principal
**Archivo:** `header-web-institutodelaia.html` (en repo web)
- Navegación completa del sitio web.
- Breakpoint 1024px para menú móvil.
- Estructura optimizada para máxima velocidad.

### Implementación Técnica
- **Breakpoint JS/CSS:** 1024px.
- **Z-Index:** Header (1000), Overlay (998), Menú Lateral (999).

---

## Estructura de Sección Inicio (Dashboard)

La sección inicio del Dashboard Instituto de la IA está organizada en **13 componentes**:

### 1️⃣ Header y Bienvenida
- **01-dashboard-inicio-institutodelaia.html** - Título "DASHBOARD".
- **02-bienvenida-institutodelaia.html** - Mensaje de bienvenida.

### 2️⃣ Avisos y Accesos
- **03-aviso-admin-docentes-institutodelaia.html** 👥 - Aviso docentes.
- **04-accesos-rapidos-institutodelaia.html** ⚡ - Accesos rápidos.
- **05-aviso-solo-visualizacion-institutodelaia.html** 👁️ - Solo visualización.
- **06-reglamento-institutodelaia.html** - Reglamento.
- **07-plataforma-inactiva-institutodelaia.html** - Aviso inactiva.

### 3️⃣ Sección Administrativa
- **08-aviso-solo-administrativos-institutodelaia.html** 🔒 - Aviso admin.
- **09-informacion-chatbot-institutodelaia.html** - Chatbot.
- **10-oferta-activa-institutodelaia.html** - Tabla oferta activa.
- **11-requisiciones-institutodelaia.html** 📋 - Formularios requisiciones.
- **12-correos-activos-institutodelaia.html** 📧 - Correos activos.

### 4️⃣ Sección Estudiantil
- **13-aviso-dashboard-estudiantil-institutodelaia.html** 📚 - Aviso estudiantil.

---

## Recursos Adicionales (Extras)

### Carpeta: `Extras/`
**Archivo principal:** `extras-grid-institutodelaia.html`

Grid de recursos con 6 secciones idéntico al sistema central pero con colores Instituto de la IA (#001C3C).

---

## 🛠️ Cómo Usar en Elementor

1. **Editar Página**: Usar Elementor.
2. **Widget HTML**: Arrastrar widget HTML.
3. **Pegar Código**: Copiar TODO el contenido del archivo HTML (incluyendo `<style>` y `<script>`).
4. **Guardar**: Publicar cambios.

---

**Versión:** 4.0 (Update Headers 1024px)
**Fecha:** Enero 2026
