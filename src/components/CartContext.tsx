'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Importe as interfaces unificadas que você criou no arquivo types
import { Product, CartItem } from '@/types';

// 2. Defina a interface para o contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  // A função addItem agora recebe um objeto do tipo Product
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  cartCount: number;
}

// 3. Crie o contexto com valores padrão
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Crie o provedor de contexto e adicione a tipagem para children
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Calcula o número total de itens no carrinho
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addItem = (item: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Se o item já existe, atualize a quantidade
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Se o item não existe, adicione-o com a quantidade 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId: number) => {
    setCartItems(prevItems => {
      // Filtra o array para remover o item com o ID correspondente
      return prevItems.filter(item => item.id !== itemId);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Crie um hook customizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};