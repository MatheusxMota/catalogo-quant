// src/app/page.tsx

// Remove a diretiva "use client" e as importações de estado e de tipagem
import UnderLine from "@/components/UnderLine";
import Header from "@/components/Header";
import Ofertas from "@/components/Ofertas";
import Produtos from "@/components/Produtos";



export default function Home() {
  return (
    <main>
      <>
        <UnderLine />
        {/* Não passa mais props de carrinho */}
        <Header />
        <Ofertas />
        <Produtos />
        
        
      </>
    </main>
  );
}
