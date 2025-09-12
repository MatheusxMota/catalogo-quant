// src/components/Header.tsx
"use client"; // Precisa ser um componente de cliente para usar hooks

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import CartModal from "./CartModal";
import { useCart } from "./CartContext";

// Remove a interface HeaderProps
export default function Header() {
  // Use o useCart para obter a contagem de itens diretamente do contexto
  const { cartCount } = useCart();
  // Estado para controlar a visibilidade do modal
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="bg-gray-100 p-6 flex items-center justify-between">
        {/* Lado esquerdo: logo + texto */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <p className="text-lg font-bold text-green-600">
            Quant-tecnologia
          </p>
        </div>

        {/* Centro: input de pesquisa */}
        <div className="flex flex-1 justify-center">
          <div className="flex">
            <input
              type="text"
              placeholder="Pesquisar materiais..."
              className="border text-center border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
            />
            <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
              Buscar
            </button>
          </div>
        </div>

        {/* Direita: ícone de carrinho */}
        <div className="w-40 flex justify-end">
          <button
            onClick={handleOpenCart}
            className="relative mx-8 text-green-600 hover:text-green-800"
          >
            <FaShoppingCart size={28} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
      {/* Renderiza o modal se isCartOpen for true */}
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
}