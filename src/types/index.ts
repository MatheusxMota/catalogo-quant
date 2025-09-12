// src/types/index.ts

export interface Product {
    id: number;
    title: string;
    price: number; // O preço será um número para facilitar os cálculos
    image: string;
    oldPrice?: string; // Mantemos como string, pois é para exibição
    discount?: string; // Mantemos como string, pois é para exibição
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }

  