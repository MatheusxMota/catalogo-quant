// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import UnderLine from "@/components/UnderLine";
import Header from "@/components/Header";
import Ofertas from "@/components/Ofertas";
import Produtos from "@/components/Produtos";

import { Product } from "@/types";
import { offerProducts, regularProducts } from "@/data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para armazenar as listas filtradas separadamente
  const [filteredOfferProducts, setFilteredOfferProducts] = useState<Product[]>([]);
  const [filteredRegularProducts, setFilteredRegularProducts] = useState<Product[]>([]);

  // Use useEffect para filtrar as listas de produtos sempre que o searchTerm mudar
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filtra a lista de produtos de oferta
    const offersFiltered = offerProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredOfferProducts(offersFiltered);

    // Filtra a lista de produtos regulares
    const regularsFiltered = regularProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredRegularProducts(regularsFiltered);
    
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <>
        <UnderLine />
        <Header onSearch={handleSearch} />
        {/* Passa a lista filtrada de ofertas para o componente Ofertas */}
        <Ofertas products={filteredOfferProducts} />
        {/* Passa a lista filtrada de produtos para o componente Produtos */}
        <Produtos products={filteredRegularProducts} />
      </>
    </main>
  );
}