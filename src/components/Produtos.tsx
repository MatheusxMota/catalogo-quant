// src/components/Produtos.tsx
"use client";

import { Product } from "@/types";
import ProductCard2 from "./ProductCard2";
import { useCart } from "./CartContext";

// Defina a interface para as props que o componente irá receber
interface ProdutosProps {
  products: Product[];
}

// Atualize o componente para receber a prop 'products'
export default function Produtos({ products }: ProdutosProps) {
  const { addItem } = useCart();

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Mais produtos para você
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Renderize os produtos que foram passados como props */}
        {products.map((p) => (
          <ProductCard2
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
export const products2: Product[] = [
  {
    id: 7,
    title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
    price: 1.0,
    discount: "-11%",
    image: "/tijolo.png",
  },
  {
    id: 8,
    title: "Churrasqueira Centaurus a Bafo",
    price: 1779.9,
    oldPrice: "2020.21",
    discount: "-11%",
    image: "/churrasqueira.png",
  },
  {
    id: 9,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 10,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 11,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 12,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 13,
    title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
    price: 1.0,
    discount: "-11%",
    image: "/tijolo.png",
  },
  {
    id: 14,
    title: "Churrasqueira Centaurus a Bafo",
    price: 1779.9,
    oldPrice: "2020.21",
    discount: "-11%",
    image: "/churrasqueira.png",
  },
  {
    id: 15,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 16,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 17,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
  {
    id: 18,
    title: "Mini Balizador Solar LED",
    price: 7.9,
    oldPrice: "11.69",
    discount: "-32%",
    image: "/balizador.png",
  },
];