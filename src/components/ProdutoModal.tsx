import Image from "next/image";

interface ProdutoModalProps {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  discount?: string;
  onClose: () => void;
}

export default function ProductModal({
  title,
  price,
  oldPrice,
  image,
  discount,
  onClose,
}: ProdutoModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Botão fechar */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="mx-auto"
        />

        {discount && (
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {discount}
          </span>
        )}
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        {oldPrice && (
          <p className="text-sm text-gray-400 line-through">{oldPrice}</p>
        )}
        <p className="text-lg font-bold text-green-700">{price}</p>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Comprar pelo WhatsApp
        </button>
      </div>
    </div>
  );
}
