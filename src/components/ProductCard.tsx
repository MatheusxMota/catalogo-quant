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
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  discount,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white"
        onClick={() => setOpen(true)}
      >
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
