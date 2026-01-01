import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProducts";

import type { StrapiEntity } from "@/types/strapi";
import type { ProductAttributes } from "@/types/strapi";

import type { Category } from "@/types/category";

interface ProductsSectionProps {
  whatsappLink: (message: string) => string;
}

export default function ProductsSection({
  whatsappLink,
}: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  // 🔹 Fetch dinámico
  const {
    data: categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useCategories();

  const [page, setPage] = useState(1);
  const { products, pagination, loading: loadingProducts, error: errorProducts} = useProducts({
    categorySlug: selectedCategory,
    page,
    pageSize: 8,
  });

  // Volver a página 1 cuando cambia la categoría
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  return (
    <section id="productos" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Catálogo de <span className="text-accent">Productos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Periféricos y accesorios disponibles
          </p>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            onClick={() => setSelectedCategory(undefined)}
            variant={!selectedCategory ? "default" : "outline"}
          >
            Todos
          </Button>

          {loadingCategories && <span>Cargando categorías…</span>}
          {errorCategories && <span>Error al cargar categorías</span>}

          {categories?.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => {
                if (cat.slug) {
                  setSelectedCategory(cat.slug);
                }
              }}
              variant={selectedCategory === cat.slug ? "default" : "outline"}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* GRID DE PRODUCTOS */}
        {loadingProducts && <p className="text-center">Cargando productos…</p>}

        {errorProducts && (
          <p className="text-center text-red-500">Error al cargar productos</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const img = product.images?.[0]?.url;

            return (
              <Card
                key={product.id}
                className="group hover:border-accent/50 transition-all hover:shadow-lg overflow-hidden"
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  {img && (
                    <img
                      src={`${import.meta.env.VITE_STRAPI_URL}${img}`}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>

                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{product.name}</h3>

                  <span className="block text-2xl font-bold text-accent">
                    ${product.price.toLocaleString()}
                  </span>

                  <Link to={`/producto/${product.slug}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {!loadingProducts && products.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No hay productos en esta categoría
          </p>
        )}

        {/* PAGINACIÓN */}
        {pagination && pagination.pageCount > 1 && (
          <div className="flex flex-col items-center gap-4 mt-12">
            {/* Información de página */}
            <p className="text-sm text-muted-foreground">
              Página {pagination.page} de {pagination.pageCount} ({pagination.total} productos)
            </p>

            {/* Controles de paginación */}
            <div className="flex gap-2">
              <Button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                variant="outline"
              >
                Anterior
              </Button>

              {/* Números de página */}
              <div className="flex gap-1">
                {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map((pageNum) => {
                  // Mostrar solo algunas páginas alrededor de la actual
                  const showPage =
                    pageNum === 1 ||
                    pageNum === pagination.pageCount ||
                    (pageNum >= page - 1 && pageNum <= page + 1);

                  if (!showPage) {
                    // Mostrar "..." para páginas omitidas
                    if (pageNum === page - 2 || pageNum === page + 2) {
                      return (
                        <span key={pageNum} className="px-3 py-2">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <Button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      variant={page === pageNum ? "default" : "outline"}
                      size="sm"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.pageCount}
                variant="outline"
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
