# Catálogo Gamer - Frontend

Sitio web profesional para Doctor PC, especialista en reparación y mantenimiento de computadoras, notebooks, consolas y PC Gamer.

## Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS v4** - Framework de estilos
- **React Router DOM** - Navegación entre páginas
- **Lucide React** - Iconos
- **Strapi** - CMS headless (backend)

## Características

- Diseño responsive y moderno con tema dark
- Catálogo de productos con paginación
- Filtrado por categorías
- Vista detallada de productos con galería de imágenes
- Integración con WhatsApp para consultas
- Carrusel de testimonios
- Animaciones y efectos visuales
- SEO optimizado

## Prerequisitos

- Node.js 18+ y npm
- Backend de Strapi corriendo en `http://localhost:1337`

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Editar .env y configurar la URL de Strapi
VITE_STRAPI_URL=http://localhost:1337
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173
```

## Build

```bash
# Crear build de producción
npm run build

# Preview del build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes React
│   ├── layout/      # Header, Footer
│   ├── sections/    # Secciones de la página
│   └── ui/          # Componentes de UI reutilizables
├── hooks/           # Custom hooks
│   ├── useCategories.ts
│   ├── useProducts.ts
│   └── useProduct.ts
├── pages/           # Páginas de la aplicación
│   ├── HomePage.tsx
│   └── ProductDetail.tsx
├── types/           # Tipos de TypeScript
│   ├── category.ts
│   ├── product.ts
│   ├── pagination.ts
│   └── strapi.ts
├── App.tsx          # Componente raíz con rutas
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

## Secciones del Sitio

1. **Hero** - Banner principal con llamado a acción
2. **Sobre Mí** - Información del técnico y estadísticas
3. **Servicios** - Servicios ofrecidos
4. **Productos** - Catálogo de productos con filtros
5. **Cómo Comprar** - Proceso de compra
6. **Beneficios** - Ventajas del servicio
7. **Testimonios** - Reseñas de clientes
8. **CTA** - Llamado a acción final

## Integración con Backend

El frontend consume la API de Strapi para:

- Obtener listado de productos
- Filtrar productos por categoría
- Obtener detalles de un producto
- Listar categorías disponibles

Todas las peticiones se realizan a través de custom hooks ubicados en `src/hooks/`.

## Variables de Entorno

```env
VITE_STRAPI_URL=http://localhost:1337
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecutar ESLint

## Contacto

Para consultas sobre el sitio web o servicios técnicos:
- WhatsApp: +54 9 381 539-5778

## Licencia

Privado - Todos los derechos reservados
