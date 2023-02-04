import Head from "next/head";
import Image from "next/image";
import { MapPin, ShoppingCart } from "phosphor-react";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-40 py-8">
        <Image width={85} height={40} src="/Logo.svg" alt="" />
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <MapPin className="mr-3 text-purple-300 w-5 h-5" weight="fill" />{" "}
            <div>Porto Alegre, RS</div>
          </div>
          <ShoppingCart weight="fill" color="#C47F17" width={22} height={22} />
        </div>
      </header>

      <div className="flex justify-center items-center gap-10 font-roboto  ">
        <div>
          <div className="mb-3">
            <div className="font-bold text-3xl max-w-sm">
              Encontre o cafe perfeito para qualquer hora do dia
            </div>
            <div>
              com o coffe delivery voce recebe seu cafe onde estivr, a qualquer
              hora
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <ShoppingCart /> compra simples e segura
              <ShoppingCart /> compra simples e segura
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-yellow-500 rounded-full">
                <ShoppingCart />
              </div>{" "}
              compra simples e segura
              <ShoppingCart /> compra simples e segura
            </div>
          </div>
        </div>

        <Image width={476} height={360} src="/Coffe.png" alt="" />
      </div>
    </>
  );
}
