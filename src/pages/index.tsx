import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import Image from "next/image";
import { ShoppingCart } from "phosphor-react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header />

      <div className="text-2xl font-extrabold mt-14">Nossos cafés</div>

      <div className="flex flex-wrap gap-2 ">
        <Card />
      </div>
    </div>

    // componentizar o o header,mudar a cor do body e comecar o main, depois rotas das outras paginas e comecar a outra pagina
  );
}
