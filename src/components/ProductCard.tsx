// src/components/ProductCard.tsx

"use client";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  discount?: string;
  // Adicione a prop para a função do carrinho
  onAddToCart: (product: any) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  discount,
  onAddToCart, // Receba a função como prop
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white"
      >
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="mx-auto p-4"
          onClick={() => setOpen(true)} // Mantenha o clique para abrir o modal
        />
        <div className="p-4" onClick={() => setOpen(true)}>
          {discount && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
              {discount}
            </span>
          )}
          <h3 className="font-semibold text-gray-800 mt-2 line-clamp-2">
            {title}
          </h3>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">{oldPrice}</p>
          )}
          <p className="text-lg font-bold text-green-700">{price}</p>
        </div>

        {/* Adicione o botão "Adicionar ao carrinho" aqui */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-b-lg hover:bg-green-700 transition"
          onClick={() =>
            onAddToCart({
              id,
              title,
              price,
              image,
            })
          }
        >
          Adicionar ao carrinho 🛒
        </button>
      </div>

      {/* Modal */}
      {open && (
        <ProductModal
          id={id}
          title={title}
          price={price}
          oldPrice={oldPrice}
          image={image}
          discount={discount}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}