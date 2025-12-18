# Dashboard Instituto de la IA - Guía de Uso

## 📋 Descripción

Este proyecto contiene el diseño HTML/CSS mejorado para el dashboard de la plataforma educativa del Instituto de la IA, optimizado para WordPress con Elementor.

## 📁 Archivos Incluidos

### 1. **seccion-01-menu.html**
Menú lateral de navegación con:
- ✨ Diseño moderno con gradientes
- 🎨 Efectos glassmorphism
- 📱 Responsive con menú hamburguesa en móvil
- 🎭 Animaciones suaves y micro-interacciones
- 🔄 Overlay con blur para móvil

### 2. **seccion-02-contenido.html**
Contenido principal del curso con:
- 📚 4 días de contenido organizados
- 🔗 Enlaces a todos los materiales (videos, PDFs, quizzes)
- 🎯 Sección de recursos por cada día
- 🏆 Quiz final destacado
- 📊 Diseño en cards con efectos hover
- 🎨 Sistema de colores consistente

### 3. **seccion-03-proximos-cursos.html**
Información de próximos cursos con:
- 📅 Fechas del curso
- 🕐 Horarios
- 📆 Duración
- 🚀 Botón CTA de inscripción
- ✨ Efectos hover interactivos
- 🎬 Animaciones de entrada

### 4. **dashboard-completo.html**
Vista integrada de las 3 secciones (para previsualización)

## 🚀 Cómo Usar en Elementor

### Opción 1: Secciones Individuales (Recomendado)

1. **Abre tu página en Elementor**
2. **Agrega un widget HTML** donde quieras cada sección
3. **Copia y pega el código** de cada archivo:
   - Para el menú lateral: contenido de `seccion-01-menu.html`
   - Para el contenido: contenido de `seccion-02-contenido.html`
   - Para próximos cursos: contenido de `seccion-03-proximos-cursos.html`

### Opción 2: Layout Completo

1. **Crea una nueva página** en Elementor
2. **Agrega un widget HTML**
3. **Copia todo el contenido** de `dashboard-completo.html`

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: `#001C3C` (Azul oscuro)
- **Secundario**: `#003366` (Azul medio)
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

## 🔧 Personalización

### Cambiar Colores
Busca y reemplaza en el CSS:
```css
/* Color primario */
#001C3C → TU_COLOR

/* Color secundario */
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

### Próximos Cursos (seccion-03-proximos-cursos.html)
- Animaciones de entrada escalonadas
- Efectos hover interactivos
- Botón CTA personalizable

## 📊 Estructura de Contenido

### Día 1-4
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

### Respecto al Diseño Original

1. **Diseño Visual**
   - ✅ Gradientes modernos
   - ✅ Efectos glassmorphism
   - ✅ Sombras más profundas
   - ✅ Mejor jerarquía visual

2. **Interactividad**
   - ✅ Animaciones suaves
   - ✅ Micro-interacciones
   - ✅ Hover effects mejorados
   - ✅ Transiciones fluidas

3. **Organización**
   - ✅ Mejor estructura de contenido
   - ✅ Recursos agrupados por día
   - ✅ Enlaces organizados
   - ✅ Secciones claramente definidas

4. **Responsive**
   - ✅ Mobile-first approach
   - ✅ Breakpoints optimizados
   - ✅ Touch-friendly
   - ✅ Adaptación fluida

5. **Tipografía**
   - ✅ Fuente moderna (Inter)
   - ✅ Jerarquía clara
   - ✅ Legibilidad mejorada
   - ✅ Pesos variables

## 🔗 Enlaces Incluidos

Todos los enlaces del curso están integrados:
- Material de estudio por día
- Videos en ambas vistas
- Quizzes de cada día
- Quiz final
- Enlace al curso completo

## 💡 Tips de Implementación

1. **Prueba primero** cada sección individualmente en Elementor
2. **Ajusta los espaciados** según tu layout existente
3. **Verifica los enlaces** antes de publicar
4. **Prueba en móvil** para asegurar responsive
5. **Personaliza los colores** según tu branding

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

## 📞 Soporte

Para dudas o personalizaciones adicionales, contacta al equipo de desarrollo.

---

**Desarrollado para Instituto de la IA**
*Versión 2.0 - Diciembre 2024*
