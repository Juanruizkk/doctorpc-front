// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: any[];
  brand: string;
  price: number;
  stock: number;
  active: boolean;
  images: {
    url: string;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
}
