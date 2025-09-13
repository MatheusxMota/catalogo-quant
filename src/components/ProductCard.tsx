// src/components/ProductCard.tsx

"use client";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { Product } from "@/types";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  oldPrice?: string;
  image: string;
  discount?: string;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  discount,
  onAddToCart,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 1. Adicione 'flex', 'flex-col' e 'justify-between' ao container principal */}
      <div
        className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white flex flex-col justify-between"
      >
        {/* Conteúdo que varia de altura */}
        <div onClick={() => setOpen(true)}>
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="mx-auto p-4"
          />
          <div className="p-4">
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
        </div>

        {/* 2. Adicione 'mt-auto' ao botão para empurrá-lo para baixo */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-b-lg hover:bg-green-700 transition mt-auto"
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