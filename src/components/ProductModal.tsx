import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";

interface ProductModalProps {
  id: number; // Adicione esta linha
  images: string[];
  title: string;
  price: number;
  oldPrice?: string;
  discount?: string;
  onClose: () => void;
}

export default function ProductModal({
  id, // Adicione 'id' aqui também
  images,
  title,
  price,
  oldPrice,
  discount,
  onClose,
}: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Botão para fechar o modal */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Carrossel de imagens */}
        <div className="relative">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            width={300}
            height={300}
            className="mx-auto"
          />

          {/* Botões de navegação, visíveis apenas se houver mais de uma imagem */}
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-800 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100"
                onClick={handlePrevImage}
              >
                &lt;
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-800 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100"
                onClick={handleNextImage}
              >
                &gt;
              </button>
            </>
          )}
        </div>

        {/* Informações do produto */}
        <div className="mt-4">
          {discount && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
              {discount}
            </span>
          )}
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {formatter.format(Number(oldPrice))}
            </p>
          )}
          <p className="text-lg font-bold text-green-700">
            {formatter.format(price)}
          </p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5521986066603&text=Olá%2C%20gostaria%20de%20fazer%20um%20pedido%20pelo%20catálogo%20online!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-4 w-full bg-green-600 text-white py-2 rounded text-center hover:bg-green-700"
        >
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}