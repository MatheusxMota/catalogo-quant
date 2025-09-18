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
  // A propriedade 'image' agora é 'images', um array de strings.
  images: string[];
  discount?: string;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  // A propriedade 'image' foi alterada para 'images'.
  images,
  discount,
  onAddToCart,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  // Cria um formatador de moeda para Real (BRL)
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div
        className="shadow-lg rounded-lg hover:shadow-gray-400 hover:shadow-lg transition cursor-pointer bg-white flex flex-col justify-between"
      >
        <div onClick={() => setOpen(true)}>
          <Image
            // Use a primeira imagem do array 'images[0]' como a imagem principal.
            src={images[0]}
            alt={title}
            width={200}
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
              <p className="text-sm text-gray-400 line-through">
                {formatter.format(Number(oldPrice))}
              </p>
            )}
            <p className="text-lg font-bold text-green-700">
              {formatter.format(price)}
            </p>
          </div>
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded-b-lg hover:bg-green-700 transition mt-auto cursor-pointer"
          onClick={() =>
            onAddToCart({
              id,
              title,
              price,
              // O objeto do carrinho ainda espera 'image', use 'images[0]'.
              images
            })
          }
        >
          Adicionar ao carrinho 
        </button>
      </div>
      {open && (
        <ProductModal
          id={id}
          title={title}
          price={price}
          oldPrice={oldPrice}
          // Passe o array 'images' para o ProductModal.
          images={images}
          discount={discount}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}