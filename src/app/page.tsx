// src/app/page.tsx
"use client";

import UnderLine from "@/components/UnderLine";
import Header from "@/components/Header";
import Ofertas from "@/components/Ofertas";
import Produtos from "@/components/Produtos";
import { useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
  discount?: string;
}

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Produto adicionado ao carrinho:", product);
  };

  return (
    <main>
      <>
        <UnderLine />
        <Header cartItemCount={cart.length} />
        <Ofertas onAddToCart={handleAddToCart} />
        <Produtos onAddToCart={handleAddToCart} />
      </>
    </main>
  );
}