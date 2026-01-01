// Wrapper genérico
export interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

// Entidad genérica
export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

// Media
export interface StrapiMedia {
  id: number;
  attributes: {
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
    formats?: Record<string, any>;
  };
}


export interface CategoryAttributes {
  name: string;
  slug: string;
}


export interface ProductAttributes {
  name: string;
  slug: string;
  description?: unknown[];
  brand?: string;
  price: number;
  stock?: number;
  active: boolean;

  images: {
    data: StrapiMedia[];
  };

  category: {
    data: StrapiEntity<CategoryAttributes>;
  };
}