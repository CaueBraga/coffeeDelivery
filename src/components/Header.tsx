import Head from "next/head";
import Image from "next/image";
import { MapPin, ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export function Header() {
  return (
    <>
      <header className="flex justify-between w-full">
        <Image width={85} height={40} src="/Logo.svg" alt="" />
        <div className="flex items-center">
          <div className="flex items-center mr-4 bg-purple-100 p-2 rounded">
            <MapPin className="mr-3 text-purple-300 w-5 h-5" weight="fill" />{" "}
            <div>Porto Alegre, RS</div>
          </div>
          <div className="bg-yellow-100 p-2 rounded">
            <ShoppingCart
              weight="fill"
              color="#C47F17"
              width={22}
              height={22}
            />
          </div>
        </div>
      </header>

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

        <Image width={476} height={360} src="/Coffe.png" alt="" />
      </div>
    </>
  );
}
