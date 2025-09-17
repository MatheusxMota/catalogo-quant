// src/types.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: string;

  images: string[];
  discount?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
