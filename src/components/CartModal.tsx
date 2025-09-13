"use client";

import Image from "next/image";
import { useState } from "react";
// Importe o hook 'useCart'
import { useCart } from "./CartContext";
// Importe a interface 'CartItem'
import { CartItem } from "@/types";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  // Use o hook para obter os dados do carrinho e as funções
  const { cartItems, removeItem } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<
    "pix" | "credit" | "debit" | null
  >(null);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateWhatsAppLink = () => {
    const phoneNumber = "5521976011669";
    const paymentText = selectedPayment
      ? selectedPayment === "pix"
        ? "PIX"
        : selectedPayment === "credit"
        ? "Cartão de Crédito"
        : "Cartão de Débito"
      : "Não informada";

    const message = `Olá, gostaria de finalizar meu pedido!%0A%0A*Itens do Pedido:*%0A${cartItems
      .map(
        (item) =>
          `- ${item.quantity}x ${item.title} (R$ ${item.price
            .toFixed(2)
            .replace(".", ",")})`
      )
      .join("%0A")}%0A%0A*Total:* R$ ${total
      .toFixed(2)
      .replace(
        ".",
        ","
      )}%0A*Forma de Pagamento:* ${paymentText}%0A%0AAguardamos sua resposta!`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-1/2 lg:w-1/3 max-h-[90vh] overflow-y-auto transform transition-all p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-grey text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-ocean mb-6">Seu Carrinho</h2>
        {cartItems.length === 0 ? (
          <p className="text-primary-grey text-center">Seu carrinho está vazio.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-b border-gray-200 pb-4"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-blue-ocean">{item.title}</h3>
                  <p className="text-sm text-primary-grey">
                    R$ {item.price.toFixed(2).replace(".", ",")} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 pt-4 border-t border-gray-300 text-right">
          <p className="text-xl font-bold text-blue-ocean">
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-300">
          <h3 className="text-lg font-bold text-blue-ocean mb-4">Opções de Pagamento</h3>

          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <button
              onClick={() => setSelectedPayment("pix")}
              className={`flex-1 p-4 rounded-md font-bold transition-colors ${
                selectedPayment === "pix"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-primary-grey"
              }`}
            >
              PIX
            </button>
            <button
              onClick={() => setSelectedPayment("credit")}
              className={`flex-1 p-4 rounded-md font-bold transition-colors ${
                selectedPayment === "credit"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-primary-grey"
              }`}
            >
              Crédito
            </button>
            <button
              onClick={() => setSelectedPayment("debit")}
              className={`flex-1 p-4 rounded-md font-bold transition-colors ${
                selectedPayment === "debit"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-primary-grey"
              }`}
            >
              Débito
            </button>
          </div>

          <div className="bg-gray-50 rounded-md p-4 min-h-[100px] flex items-center justify-center">
            {selectedPayment === "pix" && (
              <p className="text-sm text-primary-grey text-center">
                Ao finalizar a compra, um QR Code será gerado para o pagamento via PIX.
              </p>
            )}
            {selectedPayment === "credit" && (
              <p className="text-sm text-primary-grey text-center">
                [Adicione aqui o formulário de pagamento com cartão de crédito]
              </p>
            )}
            {selectedPayment === "debit" && (
              <p className="text-sm text-primary-grey text-center">
                [Adicione aqui o formulário de pagamento com cartão de débito]
              </p>
            )}
            {!selectedPayment && (
              <p className="text-sm text-primary-grey text-center">
                Selecione uma opção de pagamento acima.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 font-bold text-center border rounded-md p-2 pr-8 pl-8 m-4"
          >
            Finalize via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}