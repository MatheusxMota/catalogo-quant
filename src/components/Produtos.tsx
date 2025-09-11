import ProductCard from "./ProductCard2";

const products2 = [
    {
      id: 7,
      title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
      price: "R$ 1,00",
      image: "/tijolo.png",
    },
    {
      id: 8,
      title: "Churrasqueira Centaurus a Bafo",
      price: "R$ 1.779,90",
      oldPrice: "R$ 2.020,21",
      discount: "-11%",
      image: "/churrasqueira.png",
    },
    {
      id: 9,
      title: "Mini Balizador Solar LED",
      price: "R$ 7,90",
      oldPrice: "R$ 11,69",
      discount: "-32%",
      image: "/balizador.png",
    },
    
    {
      id: 10,
      title: "Mini Balizador Solar LED",
      price: "R$ 7,90",
      oldPrice: "R$ 11,69",
      discount: "-32%",
      image: "/balizador.png",
    },
    
    {
      id: 11,
      title: "Mini Balizador Solar LED",
      price: "R$ 7,90",
      oldPrice: "R$ 11,69",
      discount: "-32%",
      image: "/balizador.png",
    },
    
    {
      id: 12,
      title: "Mini Balizador Solar LED",
      price: "R$ 7,90",
      oldPrice: "R$ 11,69",
      discount: "-32%",
      image: "/balizador.png",
    },

    {
        id: 13,
        title: "Tijolo Comum Vermelho 8,7x4,3x18,6cm",
        price: "R$ 1,00",
        image: "/tijolo.png",
      },
      {
        id: 14,
        title: "Churrasqueira Centaurus a Bafo",
        price: "R$ 1.779,90",
        oldPrice: "R$ 2.020,21",
        discount: "-11%",
        image: "/churrasqueira.png",
      },
      {
        id: 15,
        title: "Mini Balizador Solar LED",
        price: "R$ 7,90",
        oldPrice: "R$ 11,69",
        discount: "-32%",
        image: "/balizador.png",
      },
      
      {
        id: 16,
        title: "Mini Balizador Solar LED",
        price: "R$ 7,90",
        oldPrice: "R$ 11,69",
        discount: "-32%",
        image: "/balizador.png",
      },
      
      {
        id: 17,
        title: "Mini Balizador Solar LED",
        price: "R$ 7,90",
        oldPrice: "R$ 11,69",
        discount: "-32%",
        image: "/balizador.png",
      },
      
      {
        id: 18,
        title: "Mini Balizador Solar LED",
        price: "R$ 7,90",
        oldPrice: "R$ 11,69",
        discount: "-32%",
        image: "/balizador.png",
      },
    // ... até 6 produtos
  ];


export default function Produtos() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Materiais com preços exclusivos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products2.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
