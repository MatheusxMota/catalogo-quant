// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import UnderLine from "@/components/UnderLine";
import Header from "@/components/Header";
import Ofertas from "@/components/Ofertas";
import Produtos from "@/components/Produtos";

// Importe a interface Product do seu arquivo de tipos centralizado
import { Product } from "@/types";

// Importe suas listas de produtos para o componente principal
import { products as ofertaProducts } from "@/components/Ofertas";
import { products2 as outrosProdutos } from "@/components/Produtos";

// Crie uma lista combinada de todos os produtos
const allProducts: Product[] = [...ofertaProducts, ...outrosProdutos];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Use useEffect para filtrar a lista de produtos sempre que o searchTerm mudar
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <>
        <UnderLine />
        {/* Passe a função de busca para o Header */}
        <Header onSearch={handleSearch} />
        {/* Passe a lista filtrada para os componentes de produto */}
        <Ofertas products={filteredProducts} />
        <Produtos products={filteredProducts} />
      </>
    </main>
  );
}