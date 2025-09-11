// src/components/Ofertas.tsx
"use client";

import ProductCard from "./ProductCard";
import { useState } from "react";

// Defina a interface para o produto
interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
  discount?: string;
}

const products = [
  {
    id: 1,
    title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
    price: "R$ 1,00",
    image: "/tijolo.png",
  },
  {
    id: 2,
    title: "Churrasqueira Centaurus a Bafo",
    price: "R$ 1.779,90",
    oldPrice: "R$ 2.020,21",
    discount: "-11%",
    image: "/churrasqueira.png",
  },
  {
    id: 3,
    title: "Mini Balizador Solar LED",
    price: "R$ 7,90",
    oldPrice: "R$ 11,69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 4,
    title: "Mini Balizador Solar LED",
    price: "R$ 7,90",
    oldPrice: "R$ 11,69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 5,
    title: "Mini Balizador Solar LED",
    price: "R$ 7,90",
    oldPrice: "R$ 11,69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 6,
    title: "Mini Balizador Solar LED",
    price: "R$ 7,90",
    oldPrice: "R$ 11,69",
    discount: "-32%",
    image: "/balizador.png",
  },
];

export default function Ofertas() {
  // 1. Defina o tipo do estado como um array da interface Product
  const [cart, setCart] = useState<Product[]>([]);

  // 2. Defina o tipo do parâmetro 'product' na função
  const handleAddToCart = (product: Product) => {
    // A lógica para adicionar ao carrinho
    setCart((prevCart) => [...prevCart, product]);
    console.log("Produto adicionado ao carrinho:", product);
  };

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Materiais com preços exclusivos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}