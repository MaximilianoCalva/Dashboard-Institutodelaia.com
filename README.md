# Dashboard Instituto de la IA - Guía de Uso

**Versión**: 2.1.0  
**Última actualización**: Enero 2026

## 📋 Descripción

Este proyecto contiene el diseño HTML/CSS completo para el dashboard de la plataforma educativa del Instituto de la IA, optimizado para WordPress con Elementor. Incluye todos los componentes necesarios para una experiencia de usuario profesional y moderna.

## 📁 Estructura de Archivos

### Carpeta: Seccion inicio/
Componentes de la página de inicio del dashboard:

#### **01-dashboard-inicio-institutodelaia.html**
- Cápsula de bienvenida "DASHBOARD - Inicio"
- Diseño compacto y elegante
- Animación de flecha indicadora
- Responsive design

#### **02-bienvenida-institutodelaia.html**
- Mensaje de bienvenida personalizado
- Información sobre el curso de IA
- Características destacadas del programa
- Diseño con gradientes institucionales

#### **03-accesos-rapidos-institutodelaia.html**
- Panel de accesos rápidos
- Enlaces a recursos importantes
- Grid responsive de 6 tarjetas
- Efectos hover interactivos

---

### Carpeta: Dashboard/
Componentes principales del dashboard:

#### **seccion-01-menu.html**
Menú lateral de navegación con:
- ✨ Diseño moderno con gradientes
- 🎨 Efectos glassmorphism
- 📱 Responsive con menú hamburguesa en móvil
- 🎭 Animaciones suaves y micro-interacciones
- 🔄 Overlay con blur para móvil

#### **seccion-02-contenido.html**
Contenido principal del curso con:
- 📚 4 días de contenido organizados
- 🔗 Enlaces a todos los materiales (videos, PDFs, quizzes)
- 🎯 Sección de recursos por cada día
- 🏆 Quiz final destacado
- 📊 Diseño en cards con efectos hover
- 🎨 Sistema de colores consistente

#### **seccion-03-extras.html**
Información de próximos cursos con:
- 📅 Fechas del curso
- 🕐 Horarios
- 📆 Duración
- ✨ Efectos hover interactivos
- 🎬 Animaciones de entrada

---

### Carpeta: Footer/

#### **footer-dashboard-institutodelaia.html**
Footer institucional completo con:
- 📞 Información de contacto
- 🌟 Enlaces a redes sociales
- 🔗 Enlaces rápidos
- 📧 Email y WhatsApp
- © Copyright y branding
- 📱 Diseño responsive

---

### Carpeta: Header/

#### **header-logged-in-institutodelaia.html**
Header para usuarios autenticados con:
- Logo institucional
- Botón de Dashboard
- Botón de Soporte
- Botón de Cerrar Sesión

#### **header-logged-out-institutodelaia.html**
Header para usuarios no autenticados con:
- Logo institucional
- Botón de Iniciar Sesión
- Botón de Registro

---

### Carpeta: Acceso a dashboard/

#### **login-institutodelaia-snippet.html**
- Formulario de inicio de sesión
- Diseño moderno y seguro

#### **logout-institutodelaia-snippet.html**
- Confirmación de cierre de sesión
- Redirección automática

---

## 🛠️ Plataforma y Tecnología

### Stack Tecnológico
- **CMS**: WordPress
- **LMS**: LearnDash / Tutor LMS
- **Constructor**: Elementor Pro
- **Hosting**: Panel Instituto de la IA

### Implementación de Componentes HTML

Todos los componentes HTML de este proyecto están diseñados para ser implementados en **Elementor** usando el widget HTML.

#### Cómo Usar en Elementor:

1. **Editar Página/Template**
   - Ir a la página del dashboard que deseas editar
   - Abrir con Elementor

2. **Agregar Widget HTML**
   - Buscar "HTML" en el panel de widgets
   - Arrastrar el widget a la sección deseada

3. **Copiar y Pegar Código**
   - Abrir el archivo HTML del componente
   - Copiar TODO el contenido (incluyendo `<style>` y `<script>`)
   - Pegar en el widget HTML de Elementor

4. **Guardar y Publicar**
   - Guardar cambios
   - Publicar la página

#### Orden Sugerido de Implementación:

```
┌─────────────────────────────────────┐
│  Header (logged-in/logged-out)     │
├─────────────────────────────────────┤
│  Dashboard Inicio (Cápsula)         │
├─────────────────────────────────────┤
│  Bienvenida                         │
├─────────────────────────────────────┤
│  Accesos Rápidos                    │
├──────────────┬──────────────────────┤
│  Menú        │  Contenido           │
│  Lateral     │  Principal           │
├──────────────┴──────────────────────┤
│  Próximos Cursos / Extras           │
├─────────────────────────────────────┤
│  Footer                             │
└─────────────────────────────────────┘
```

---

## 🚀 Cómo Usar en Elementor

### Opción 1: Implementación Completa (Recomendado)

1. **Página de Dashboard Principal**
   - Agrega widget HTML para `01-dashboard-inicio-institutodelaia.html`
   - Agrega widget HTML para `02-bienvenida-institutodelaia.html`
   - Agrega widget HTML para `03-accesos-rapidos-institutodelaia.html`
   - Agrega widget HTML para `seccion-01-menu.html`
   - Agrega widget HTML para `seccion-02-contenido.html`
   - Agrega widget HTML para `seccion-03-extras.html`
   - Agrega widget HTML para `footer-dashboard-institutodelaia.html`

### Opción 2: Secciones Individuales

1. **Abre tu página en Elementor**
2. **Agrega un widget HTML** donde quieras cada sección
3. **Copia y pega el código** del archivo correspondiente

### Layout Sugerido

```
┌─────────────────────────────────────┐
│         HEADER (logged-in)          │
├─────────────────────────────────────┤
│      Dashboard Inicio (Cápsula)     │
├─────────────────────────────────────┤
│         Bienvenida                  │
├─────────────────────────────────────┤
│       Accesos Rápidos               │
├──────────────┬──────────────────────┤
│    Menú      │   Contenido          │
│  Lateral     │   Principal          │
│              │                      │
├──────────────┴──────────────────────┤
│       Próximos Cursos               │
├─────────────────────────────────────┤
│            FOOTER                   │
└─────────────────────────────────────┘
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario Oscuro**: `#001C3C` (Azul oscuro)
- **Primario Medio**: `#003366` (Azul medio)
- **Acento**: `#0066CC` (Azul brillante)
- **Fondo**: `#f8fafc` (Gris claro)
- **Texto**: `#0f172a` (Negro suave)

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700, 800, 900

### Efectos Visuales
- ✨ Gradientes suaves
- 🌟 Glassmorphism
- 🎭 Animaciones CSS
- 💫 Hover effects
- 🎨 Box shadows profundas
- 🔄 Transiciones fluidas

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Características Móviles
- Menú hamburguesa animado
- Layout adaptativo
- Touch-friendly buttons
- Optimización de espaciado
- Grid responsive

## 🔧 Personalización

### Cambiar Colores
Busca y reemplaza en el CSS:
```css
/* Color primario oscuro */
#001C3C → TU_COLOR

/* Color primario medio */
#003366 → TU_COLOR

/* Color de acento */
#0066CC → TU_COLOR
```

### Cambiar Fuente
Reemplaza en el `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Y en el CSS:
```css
font-family: 'TU_FUENTE', sans-serif;
```

### Modificar Enlaces
Actualiza los atributos `href` en las etiquetas `<a>` según tus URLs de WordPress.

## 🎯 Funcionalidades JavaScript

### Menú (seccion-01-menu.html)
- `toggleMenu()`: Abre/cierra el menú en móvil
- `closeMenu()`: Cierra el menú
- `navegarA(seccion)`: Navega a una sección (personalizable)
- Cierre con tecla ESC
- Auto-cierre al cambiar a desktop

### Próximos Cursos (seccion-03-extras.html)
- Animaciones de entrada escalonadas
- Efectos hover interactivos

## 📊 Estructura de Contenido

### Sección Inicio
- Dashboard Inicio (Cápsula de bienvenida)
- Mensaje de bienvenida personalizado
- Panel de accesos rápidos

### Contenido del Curso
Cada día incluye:
- 📖 Material de estudio
- 🎬 Videos (vista presentación)
- 🎥 Videos (vista galería)
- 🔄 Video review (cuando aplique)
- ✏️ Quiz del día

### Quiz Final
- 🏆 Destacado visualmente
- 🎯 Call-to-action prominente
- ✨ Diseño especial

## 🌟 Mejoras Implementadas

### Versión 2.0 (Enero 2026)

1. **Nuevos Componentes**
   - ✅ Dashboard Inicio (Cápsula)
   - ✅ Bienvenida personalizada
   - ✅ Accesos rápidos
   - ✅ Footer institucional completo

2. **Mejor Organización**
   - ✅ Estructura de carpetas mejorada
   - ✅ Separación clara de componentes
   - ✅ Documentación actualizada

3. **Diseño Visual**
   - ✅ Gradientes modernos
   - ✅ Efectos glassmorphism
   - ✅ Sombras más profundas
   - ✅ Mejor jerarquía visual

4. **Interactividad**
   - ✅ Animaciones suaves
   - ✅ Micro-interacciones
   - ✅ Hover effects mejorados
   - ✅ Transiciones fluidas

5. **Responsive**
   - ✅ Mobile-first approach
   - ✅ Breakpoints optimizados
   - ✅ Touch-friendly
   - ✅ Adaptación fluida

## 🔗 Enlaces Incluidos

Todos los enlaces del curso están integrados:
- Material de estudio por día
- Videos en ambas vistas
- Quizzes de cada día
- Quiz final
- Enlace al curso completo
- Dashboard principal
- Soporte WhatsApp
- Redes sociales

## 💡 Tips de Implementación

1. **Prueba primero** cada sección individualmente en Elementor
2. **Ajusta los espaciados** según tu layout existente
3. **Verifica los enlaces** antes de publicar
4. **Prueba en móvil** para asegurar responsive
5. **Personaliza los colores** según tu branding
6. **Sigue el orden sugerido** de componentes para mejor UX

## 🐛 Solución de Problemas

### El menú no se muestra en móvil
- Verifica que el JavaScript esté cargando
- Revisa la consola del navegador

### Los enlaces no funcionan
- Verifica que las URLs sean correctas
- Asegúrate de que `target="_blank"` esté presente

### Problemas de responsive
- Limpia la caché de Elementor
- Revisa los breakpoints en Elementor

### Componentes no se ven bien
- Verifica que no haya conflictos de CSS
- Asegúrate de copiar todo el código incluyendo `<style>`

## 📞 Soporte

Para dudas o personalizaciones adicionales, contacta al equipo de desarrollo.

**WhatsApp**: +52 1 33 3405 4655  
**Email**: contacto@institutodelaia.com  
**Web**: https://institutodelaia.com

---

**Desarrollado para Instituto de la IA**  
*Versión 2.0 - Enero 2026*  
*Dashboard completo y profesional para plataforma educativa de IA*

