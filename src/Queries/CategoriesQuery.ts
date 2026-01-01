
const API_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchCategories() {
  const res = await fetch(`${API_URL}/api/categories`);

  if (!res.ok) {
    throw new Error("No se pudieron cargar las categorías");
  }

  return (await res.json());
}
