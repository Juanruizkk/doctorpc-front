import { useEffect, useState } from "react";
import type { Product } from "@/types/product";
import type { Pagination } from "@/types/pagination";

const API_URL = import.meta.env.VITE_STRAPI_URL;

interface UseProductsParams {
  categorySlug?: string;
  page?: number;
  pageSize?: number;
}

export function useProducts({
  categorySlug,
  page = 1,
  pageSize = 4,
}: UseProductsParams) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    let url = `${API_URL}/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    if (categorySlug) {
      url += `&filters[categories][slug][$eq]=${categorySlug}`;
    }

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then(json => {
        setProducts(json.data);
        setPagination(json.meta.pagination);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [categorySlug, page, pageSize]);

  return {
    products,
    pagination,
    loading,
    error,
  };
}
