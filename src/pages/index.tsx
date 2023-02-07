import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import Image from "next/image";
import { ShoppingCart } from "phosphor-react";
import styles from "@/styles/Home.module.css";
import { text } from "node:stream/consumers";

export default function Home() {
  const CoffeeCards = [
    {
      coffee: "/trad.png",
      type: "Tradicional",
      title: "Expresso Tradicional",
      text: "O tradicional café feito com água quente e grãos moídos",
      id: "1",
    },
    {
      coffee: "/americano.png",
      type: "Tradicional",
      title: "Expresso Americano",
      text: "Expresso diluído, menos intenso que o tradicional",
      id: "2",
    },
    {
      coffee: "/cremoso.png",
      type: "Tradicional",
      title: "Expresso Cremoso",
      text: "Café expresso tradicional com espuma cremosa",
      id: "3",
    },
    {
      coffee: "/gelado.png",
      type: "Gelado",
      title: "Expresso Gelado",
      text: "Bebida preparada com café expresso e cubos de gelo",
      id: "4",
    },

    {
      coffee: "/comLeite.png",
      type: "com leite",
      title: "Café com leite",
      text: "Meio a meio de expresso tradicional com leite vaporizado",
      id: "5",
    },
    {
      coffee: "/latte.png",
      type: "com leite",
      title: "Latte",
      text: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      id: "6",
    },

    {
      coffee: "/capuccino.png",
      type: "com leite",
      title: "Capuccino",
      text: "Bebida com canela feita de doses iguais de café, leite e espuma",
      id: "7",
    },

    {
      coffee: "/macchiato.png",
      type: "com leite",
      title: "Macchiato",
      text: "Café expresso misturado com um pouco de leite quente e espuma",
      id: "8",
    },

    {
      coffee: "/mocaccino.png",
      type: "com leite",
      title: "Mocaccino",
      text: "Café expresso com calda de chocolate, pouco leite e espuma",
      id: "9",
    },

    {
      coffee: "/chocolate.png",
      type: "especial",
      title: "Chocolate Quente",
      text: "Bebida feita com chocolate dissolvido no leite quente e café",
      id: "10",
    },

    {
      coffee: "/cubano.png",
      type: "Alcoólico",
      title: "Cubano",
      text: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      id: "11",
    },

    {
      coffee: "/havaiano.png",
      type: "especial",
      title: "Havaiano",
      text: "Bebida adocicada preparada com café e leite de coco",
      id: "12",
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header />

      <div className="text-2xl font-extrabold mt-14">Nossos cafés</div>

      <div className="flex flex-wrap gap-2 ">
        {CoffeeCards.map((card) => (
          <Card
            key={card.id}
            coffee={card.coffee}
            type={card.type}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
