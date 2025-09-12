// src/components/Ofertas.tsx

// Remove a diretiva "use client" e a importação de useState,
// pois este componente não gerenciará o estado diretamente.
import ProductCard from "./ProductCard";

// Defina a interface para as props que o componente receberá.
interface OfertasProps {
  onAddToCart: (product: any) => void;
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

// O componente agora recebe onAddToCart como uma prop
export default function Ofertas({ onAddToCart }: OfertasProps) {
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
            // Repassa a prop onAddToCart para o ProductCard
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}