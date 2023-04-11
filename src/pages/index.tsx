import { Header } from "@/components/Header";
import { Cards } from "@/components/Cards";
import Image from "next/image";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { CoffeeCards } from "@/data/cofeeCards";

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
