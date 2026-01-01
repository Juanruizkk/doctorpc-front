import type {
  StrapiResponse,
  StrapiEntity
} from "@/types/strapi";
import type { ProductAttributes } from "@/types/strapi";

const API_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchProducts(categorySlug?: string) {
  let url = `${API_URL}/api/products?populate=images,category`;

  if (categorySlug) {
    url += `&filters[category][slug][$eq]=${categorySlug}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("No se pudieron cargar los productos");
  }

  return (await res.json()) as StrapiResponse<
    StrapiEntity<ProductAttributes>[]
  >;
}
