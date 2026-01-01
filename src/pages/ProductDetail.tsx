import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "@/hooks/useProduct";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, X } from "lucide-react";

interface ProductDetailProps {
  whatsappLink: (message: string) => string;
}

export default function ProductDetail({ whatsappLink }: ProductDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Cargando producto...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-red-500">
          {error?.message || "Producto no encontrado"}
        </p>
        <Button onClick={() => navigate("/")}>Volver al inicio</Button>
      </div>
    );
  }

  const images = product.images || [];
  const currentImage = images[selectedImageIndex];

  return (
    <section className="py-20 px-4 bg-secondary/80">
      <div className="container mx-auto">
        {/* Botón Volver en esquina superior derecha */}
        <div className="flex justify-start my-6">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
        </div>

        {/* Grid principal: Imagen izquierda, Info derecha */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: Galería de imágenes */}
          <div className="space-y-4">
            {/* Imagen principal */}
            {currentImage && (
              <div
                className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${currentImage.url}`}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    Click para ampliar
                  </span>
                </div>
              </div>
            )}

            {/* Grid de miniaturas */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square bg-muted rounded-lg overflow-hidden transition-all ${
                      index === selectedImageIndex
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:ring-2 hover:ring-muted-foreground/50"
                    }`}
                  >
                    <img
                      src={`${import.meta.env.VITE_STRAPI_URL}${img.url}`}
                      alt={`${product.name} - ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna derecha: Información del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              {product.brand && (
                <p className="text-lg text-muted-foreground">
                  Marca: {product.brand}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-4xl font-bold text-accent">
                ${product.price.toLocaleString()}
              </p>
              {product.stock > 0 ? (
                <p className="text-sm text-green-500">
                  En stock ({product.stock} disponibles)
                </p>
              ) : (
                <p className="text-sm text-red-500">Sin stock</p>
              )}
            </div>

            {/* Descripción */}
            {product.description && product.description.length > 0 && (
              <div className="space-y-4 border-t border-b border-border py-6">
                <h2 className="text-2xl font-semibold">Descripción</h2>
                <div className="prose prose-invert max-w-none">
                  {product.description.map((block: any, index: number) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {block.children?.map((child: any) => child.text).join("")}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* Categorías */}
            {product.categories && product.categories.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Botón de WhatsApp */}
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
              onClick={() =>
                window.open(
                  whatsappLink(
                    `Hola! Me interesa el producto: ${product.name} - $${product.price.toLocaleString()}`
                  ),
                  "_blank"
                )
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={`${import.meta.env.VITE_STRAPI_URL}${currentImage.url}`}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
