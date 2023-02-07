import Link from "next/link";
import Image from "next/image";
import {
  MapPinLine,
  MapPin,
  ShoppingCart,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
  Trash,
} from "phosphor-react";

export default function Shopping(): JSX.Element {
  return (
    <div className=" max-w-5xl mx-auto my-10">
      <header className="flex justify-between w-full">
        <Image width={85} height={40} src="/Logo.svg" alt="" />
        <div className="flex items-center">
          <div className="flex items-center mr-4 bg-purple-100 p-2 rounded">
            <MapPin className="mr-3 text-purple-300 w-5 h-5" weight="fill" />{" "}
            <div>Porto Alegre, RS</div>
          </div>

          <div className="relative">
            <div className="bg-yellow-500 rounded-full w-5 h-5 text-center absolute p-2 -top-3 left-6 flex items-center justify-center ">
              0
            </div>
            <Link
              href={{
                pathname: `/shopping/[route]`,
                query: { route: "14" },
              }}
            >
              <div className="bg-yellow-100 p-2 rounded">
                <ShoppingCart
                  weight="fill"
                  color="#C47F17"
                  width={22}
                  height={22}
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex mt-20">
        <div>
          <div className="mb-4">Complete deu pedido</div>
          <div className="bg-base-100 w-[640px] h-96 p-10 ">
            <div>
              <div className="flex items-center">
                <MapPinLine
                  className="text-yellow-500"
                  width={22}
                  height={22}
                />
                <p className="ml-3 font-semibold">Endereço de entrega</p>
              </div>
              <p className="ml-9 text-sm">
                informe o endereco onde deseja receber seu pedido
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-7">
              <input placeholder="CEP" type="text" />
              <input placeholder="Rua" type="text" />

              <div>
                <input className="mr-5" placeholder="Número" type="text" />
                <input placeholder="Completo" type="text" />
              </div>

              <div className="flex justify-between">
                <input placeholder="Bairro" type="text" />
                <input className="w-64" placeholder="Cidade" type="text" />
                <input className="w-16" placeholder="UF" type="text" />
              </div>
            </div>
          </div>

          <div className="bg-base-100 w-[640px] h-52 mt-4 p-10">
            <div>
              <div className="flex items-center">
                <CurrencyDollar
                  className="text-purple-300"
                  width={22}
                  height={22}
                />
                <p className="ml-3 font-semibold">Pagamento</p>
              </div>
              <p className="ml-8 text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div className="flex justify-between mt-5">
              <button className="w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3">
                <CreditCard className="text-purple-300" weight="bold" />
                <span>Cartão de crédito</span>
              </button>
              <button className="w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3">
                <Money className="text-purple-300" weight="bold" />
                <span>Cartão de débito</span>
              </button>
              <button className="w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3">
                <Bank className="text-purple-300" weight="bold" />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-8">
          <div className="mb-4">Cafés selecionados</div>
          <div className="bg-base-100 w-[448px] h-[498px] p-10 ">
            <div className="flex items-center gap-6 relative">
              <Image width={85} height={40} src="/trad.png" alt="" />
              <div>
                <p>Expresso Tradicional</p>
                <div className="flex mt-2">
                  <div className=" mr-4 flex items-center justify-between text-xl text-purple-300 bg-base-700 p-2 w-16 h-9 rounded-md">
                    <button> - </button>
                    <div>1</div>
                    <button> + </button>
                  </div>
                  <button className=" flex items-center gap-2 p-2 uppercase text-xs  text-purple-300 bg-base-700 w-24 h-9 rounded-md">
                    <Trash width={16} height={16} /> <div>remover</div>
                  </button>
                </div>
              </div>
              <div className="absolute right-0 top-1">R$ 19,90</div>
            </div>
            <div className="bg-black w-80 mt-3 text-center h-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
