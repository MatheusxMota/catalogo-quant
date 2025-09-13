// src/components/Ofertas.tsx
"use client";

import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { useCart } from "./CartContext";

// Defina a interface para as props que o componente irá receber
interface OfertasProps {
  products: Product[];
}

// Atualize o componente para receber a prop 'products'
export default function Ofertas({ products }: OfertasProps) {
  const { addItem } = useCart();

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Materiais com preços exclusivos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Renderize os produtos que foram passados como props */}
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onAddToCart={() => addItem(p)}
          />
        ))}
      </div>
    </section>
  );
}

// Exporte a lista de produtos para que possa ser usada no componente pai (page.tsx)
export const products: Product[] = [
  {
    id: 1,
    title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
    price: 1.0,
    discount: "-11%",
    image: "/tijolo.png",
  },
  {
    id: 2,
    title: "Churrasqueira Centaurus a Bafo",
    price: 1779.9,
    oldPrice: "2020.21",
    discount: "-11%",
    image: "/churrasqueira.png",
  },
  {
    id: 3,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 4,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 5,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice:" 11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 6,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
];