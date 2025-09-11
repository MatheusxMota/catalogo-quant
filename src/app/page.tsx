import UnderLine from "@/components/UnderLine";
import Head from "next/head";
import Header from "@/components/Header";
import Ofertas from "@/components/Ofertas";
import Produtos from "@/components/Produtos";

export default function Home() {
  return (
    <main >
      <>
        <UnderLine />
        <Header/>
        <Ofertas/>
        <Produtos/>
      </>
    </main>
  )
}