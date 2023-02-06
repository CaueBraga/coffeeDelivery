import Image from "next/image";
import { MapPin, ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { Buttons } from "@/components/Butoons";

export function Card() {
  return (
    <>
      <div className="w-64 h-80  bg-base-500 rounded-tl-md mt-14 rounded-tr-3xl rounded-br-md rounded-bl-3xl  flex flex-col items-center mr-5">
        <Image
          className="-mt-4"
          width={100}
          height={100}
          src="/Coffetrad.png"
          alt=""
        ></Image>
        <div className=" my-3 px-2 py-1 text-xs font-bold uppercase bg-yellow-100 text-yellow-500 rounded-full">
          Tradicional
        </div>
        <div className="font-extrabold text-xl my-2">Expresso Tradicional</div>
        <p className="text-center text-sm text-gray-100 w-56 leading-4 mb-8">
          O tradicional café feito com água quente e grãos moídos
        </p>

        <div className="flex items-center justify-between">
          <div className="font-extrabold mr-9 text-2xl font-itim text-gray-500">
            R$ 9,90
          </div>

          <Buttons />
        </div>
      </div>

      <div className="w-64 h-80  bg-base-500 rounded-tl-md mt-14 rounded-tr-3xl rounded-br-md rounded-bl-3xl  flex flex-col items-center mr-5">
        <Image
          className="-mt-4"
          width={100}
          height={100}
          src="/americano.png"
          alt=""
        ></Image>
        <div className=" my-3 px-2 py-1 text-xs font-bold uppercase bg-yellow-100 text-yellow-500 rounded-full">
          Tradicional
        </div>
        <div className="font-extrabold text-xl my-2">Expresso Americano</div>
        <p className="text-center text-sm text-gray-100 w-56 leading-4 mb-8">
          Expresso diluído, menos intenso que o tradicional
        </p>

        <div className="flex items-center justify-between">
          <div className="font-extrabold mr-9 text-2xl font-itim text-gray-500">
            R$ 9,90
          </div>

          <Buttons />
        </div>
      </div>
    </>
  );
}
