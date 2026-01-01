import { useEffect, useState } from "react";
import type { Product } from "@/types/product";

const API_URL = import.meta.env.VITE_STRAPI_URL;

export function useProduct(slug: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const url = `${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar el producto");
        return res.json();
      })
      .then(json => {
        if (json.data && json.data.length > 0) {
          setProduct(json.data[0]);
        } else {
          setError(new Error("Producto no encontrado"));
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [slug]);

  return {
    product,
    loading,
    error,
  };
}
