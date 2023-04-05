import { Header } from "@/components/Header";
import { Cards } from "@/components/Cards";
import Image from "next/image";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import styles from "@/styles/Home.module.css";
import { text } from "node:stream/consumers";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";

const CoffeeCards = [
  {
    coffee: "/trad.png",
    type: ["Tradicional"],
    title: "Expresso Tradicional",
    text: "O tradicional café feito com água quente e grãos moídos",
    id: "1",
    price: 10,
  },
  {
    coffee: "/americano.png",
    type: ["Tradicional"],
    title: "Expresso Americano",
    text: "Expresso diluído, menos intenso que o tradicional",
    id: "2",
    price: 10,
  },
  {
    coffee: "/cremoso.png",
    type: ["Tradicional"],
    title: "Expresso Cremoso",
    text: "Café expresso tradicional com espuma cremosa",
    id: "3",
    price: 12,
  },
  {
    coffee: "/gelado.png",
    type: ["Gelado"],
    title: "Expresso Gelado",
    text: "Bebida preparada com café expresso e cubos de gelo",
    id: "4",
    price: 10,
  },

  {
    coffee: "/comLeite.png",
    type: ["com leite"],
    title: "Café com leite",
    text: "Meio a meio de expresso tradicional com leite vaporizado",
    id: "5",
    price: 12,
  },
  {
    coffee: "/latte.png",
    type: ["com leite"],
    title: "Latte",
    text: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    id: "6",
    price: 12,
  },

  {
    coffee: "/capuccino.png",
    type: ["com leite"],
    title: "Capuccino",
    text: "Bebida com canela feita de doses iguais de café, leite e espuma",
    id: "7",
    price: 12,
  },

  {
    coffee: "/macchiato.png",
    type: ["com leite"],
    title: "Macchiato",
    text: "Café expresso misturado com um pouco de leite quente e espuma",
    id: "8",
    price: 12,
  },

  {
    coffee: "/mocaccino.png",
    type: ["com leite"],
    title: "Mocaccino",
    text: "Café expresso com calda de chocolate, pouco leite e espuma",
    id: "9",
    price: 16,
  },

  {
    coffee: "/chocolate.png",
    type: ["tradicional", "com leite"],
    title: "Chocolate Quente",
    text: "Bebida feita com chocolate dissolvido no leite quente e café",
    id: "10",
    price: 12,
  },

  {
    coffee: "/cubano.png",
    type: ["Alcoólico", "gelado"],
    title: "Cubano",
    text: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    id: "11",
    price: 16,
  },

  {
    coffee: "/havaiano.png",
    type: ["especial", "com leite"],
    title: "Havaiano",
    text: "Bebida adocicada preparada com café e leite de coco",
    id: "12",
    price: 16,
  },
];

export default function Home() {
  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header />

      <div className="flex justify-center items-center gap-10 font-roboto mt-10 w-full ">
        <div className="w-full">
          <div className="mb-5">
            <div className=" text-5xl max-w-lg mb-5 font-extrabold">
              Encontre o café perfeito para qualquer hora do dia
            </div>
            <div className="max-w-md text-xl">
              Com o coffe delivery voce recebe seu café onde estiver, a qualquer
              hora
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex  justify-between items-center  w-full">
              <div className="flex items-center gap-2 w-full">
                <div className="p-2 bg-yellow-500 rounded-full">
                  <ShoppingCart weight="fill" color="white" />
                </div>{" "}
                <div>Compra simples e segura</div>
              </div>

              <div className="flex items-center gap-2 w-full">
                <div className="p-2 bg-gray-300 rounded-full">
                  <Package weight="fill" color="white" />
                </div>{" "}
                <div>Embalagem térmica</div>
              </div>
            </div>

            <div className="flex  justify-between items-center  w-full">
              <div className="flex items-center gap-2 w-full">
                <div className="p-2 bg-yellow-300 rounded-full">
                  <Timer weight="fill" color="white" />
                </div>{" "}
                <div>Entrega rápida e segura</div>
              </div>

              <div className="flex items-center gap-2  w-full">
                <div className="p-2 bg-purple-300 rounded-full">
                  <Coffee weight="fill" color="white" />
                </div>{" "}
                <div> O café chega fresquinho</div>
              </div>
            </div>
          </div>
        </div>

        <Image width={476} height={360} src="/main.png" alt="" />
      </div>

      <div className="text-2xl font-extrabold mt-14">Nossos cafés</div>

      <div className="flex flex-wrap gap-2 ">
        {CoffeeCards.map((card) => (
          <Cards
            key={card.id}
            coffee={card.coffee}
            type={card.type}
            title={card.title}
            text={card.text}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}
