import Link from "next/link";
import Image from "next/image";
import {
  CurrencyDollar,
  MapPin,
  Money,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
export default function CheckOut(): JSX.Element {
  //const quadra = localStorage.getItem("quadraValue");
  //const numero = localStorage.getItem("numeroValue");

  const [adress, setAdress] = useState<any>("");
  const [formaDePagamento, setFormaDePagamento] = useState<any>("");
  const [total, setTotal] = useState<any>("");
  const [cartItens, setCartItens] = useState<any>("");

  function getAdressArray() {
    if (!adress) {
      return [];
    }

    return JSON.parse(adress);
  }

  useEffect(() => {
    const cartItensLocal = localStorage.getItem("cartItens") || "[]";
    const parada = localStorage.getItem("adressValue") || "";
    const formaDePagamentoLocal =
      localStorage.getItem("formaDePagamento") || "";
    const totalLocal = localStorage.getItem("total") || "";
    setCartItens(JSON.parse(cartItensLocal));
    setFormaDePagamento(formaDePagamentoLocal);
    setAdress(parada);
    setTotal(totalLocal);
  }, []);

  function getFormaDePagamento() {
    if (formaDePagamento === "credit") {
      return "Cartão de Crédito";
    } else if (formaDePagamento === "debit") {
      return "Cartão de Débito";
    } else if (formaDePagamento === "money") {
      return "Dinheiro";
    }

    return "nao escolheu";
  }

  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header cartItens={cartItens} />
      <div className="mt-20 flex relative">
        <div>
          <div>
            <p className="text-4xl text-yellow-500 font-itim font-extrabold">
              uhu! Pedido confirmado
            </p>
            <p className="text-xl">
              Agora é só aguardar que logo café chegará ate você
            </p>
          </div>

          <div className="bg-base-50 font-semibold w-[500px] h-72 rounded-tl-md mt-6 rounded-tr-3xl rounded-br-md rounded-bl-3xl border-[1px] border-purple-300  border-solid ">
            <div className="p-10 flex flex-col gap-5">
              <div className="flex items-center">
                <div className="p-2 bg-purple-300 rounded-full mr-3">
                  <MapPin weight="fill" color="white" />
                </div>
                <div>
                  <div>Entrega para {getAdressArray()[3]},</div>
                  <div className="capitalize">
                    Em {getAdressArray()[0]}, {getAdressArray()[2]},{" "}
                    {getAdressArray()[1]}, {getAdressArray()[4]},{" "}
                    {getAdressArray()[5]},
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-yellow-300 rounded-full mr-3">
                  <Timer weight="fill" color="white" />
                </div>
                <div>
                  <div>Previsão de entrega</div>
                  <div>30 min - 50 min</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-yellow-500 rounded-full mr-3">
                  <CurrencyDollar weight="fill" color="white" />
                </div>
                <div>
                  <div>Pagamento na entrega</div>
                  <div>
                    {getFormaDePagamento()}{" "}
                    <span className="font-normal text-base"> R$ {total} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          className=" h-72 absolute bottom-0 -right-14 "
          width={492}
          height={100}
          src="/checkOut.png"
          alt="vdvd"
        />
      </div>
    </div>
  );
}
