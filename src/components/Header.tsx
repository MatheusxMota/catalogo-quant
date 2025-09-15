// src/components/Header.tsx
"use client";

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import CartModal from "./CartModal";
import { useCart } from "./CartContext";

interface HeaderProps {
  onSearch: (term: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Container principal: define o layout para mobile e desktop */}
      <div className="bg-white p-6 flex flex-col items-center justify-between lg:flex-row">

        {/* Linha superior no mobile: logo e carrinho */}
        <div className="flex w-full items-center justify-between lg:w-auto lg:flex-initial">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <p className="text-3xl font-bold text-green-600">
              Quant Tecnologia
            </p>
          </div>
          
          {/* Ícone de carrinho no mobile: movido para o canto */}
          <div className="relative lg:hidden">
            <button
              onClick={handleOpenCart}
              className="text-green-600 hover:text-green-800 cursor-pointer"
            >
              <FaShoppingCart size={35} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Linha de pesquisa: ocupa toda a largura em telas pequenas */}
        <div className="mt-4 w-full flex-1 flex justify-center lg:mt-0 lg:ml-8">
          <div className="flex w-full max-w-lg">
            <input
              type="text"
              placeholder="Pesquisar materiais..."
              className="border text-center border-gray-400 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
              Buscar
            </button>
          </div>
        </div>
        
        {/* Ícone de carrinho no desktop: visível apenas em telas grandes */}
        <div className="hidden lg:flex w-40 justify-end">
          <button
            onClick={handleOpenCart}
            className="relative text-green-600 hover:text-green-800 cursor-pointer"
          >
            <FaShoppingCart size={35} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
}