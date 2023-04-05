import Link from "next/link";
import Image from "next/image";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from "phosphor-react";
import { CardMap } from "@/components/CardMap";
import { useContext, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { CartContext } from "@/contexts/CartContext";

export default function Shopping(): JSX.Element {
  const [quadraValue, setQuadraValue] = useState<string>("");
  const [numeroValue, setNumeroValue] = useState<string>("");
  const [bairroValue, setBairroValue] = useState<string>("");
  const [nomeValue, setNomeValue] = useState<string>("");
  const [cidadeValue, setCidadeValue] = useState<string>("");
  const [ufValue, setUfValue] = useState<string>("");

  const { cartItens } = useContext(CartContext);

  function clickclick() {
    const adress = [
      quadraValue,
      numeroValue,
      bairroValue,
      nomeValue,
      cidadeValue,
      ufValue,
    ];
    localStorage.setItem("adressValue", JSON.stringify(adress));
    localStorage.setItem("total", JSON.stringify(cartItensSomQuantity() + 7.5));
  }

  function onClickCredito() {
    localStorage.setItem("formaDePagamento", "credit");
  }

  function onClickDebito() {
    localStorage.setItem("formaDePagamento", "debit");
  }

  function onClickDinheiro() {
    localStorage.setItem("formaDePagamento", "money");
  }

  function onChangeUf(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("numeroValue", event.target.value);

    setUfValue(event.target.value);
  }

  function onChangeCidade(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("numeroValue", event.target.value);

    setCidadeValue(event.target.value);
  }
  function onChangeNome(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("numeroValue", event.target.value);

    setNomeValue(event.target.value);
  }
  function onChangeBairro(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("numeroValue", event.target.value);

    setBairroValue(event.target.value);
  }
  function onChangeNumero(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("numeroValue", event.target.value);

    setNumeroValue(event.target.value);
  }
  function onChangeQuadra(event: React.ChangeEvent<HTMLInputElement>) {
    //localStorage.setItem("quadraValue", event.target.value);

    setQuadraValue(event.target.value);
  }

  function cartItensSomQuantity() {
    let total = 0;
    for (let i = 0; i < cartItens.length; i++) {
      total = total + cartItens[i].quantity * cartItens[i].item.price;
    }

    return total;
  }

  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header />
      <div className="flex mt-12">
        <form>
          <div className="mb-4 text-xl font-semibold font-itim">
            Complete seu pedido
          </div>
          <div className="bg-base-300 rounded-lg w-[640px] h-96 p-10 ">
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
              <input
                onChange={onChangeQuadra}
                value={quadraValue}
                placeholder="Quadra/Rua"
                type="text"
              />

              <div>
                <input
                  onChange={onChangeNumero}
                  value={numeroValue}
                  className="mr-5"
                  placeholder="Número"
                  type="text"
                />
                <input
                  onChange={onChangeNome}
                  value={nomeValue}
                  placeholder="Nome Completo"
                  type="text"
                />
              </div>

              <div className="flex justify-between">
                <input
                  onChange={onChangeBairro}
                  value={bairroValue}
                  placeholder="Bairro"
                  type="text"
                />
                <input
                  onChange={onChangeCidade}
                  value={cidadeValue}
                  className="w-64"
                  placeholder="Cidade"
                  type="text"
                />
                <input
                  onChange={onChangeUf}
                  value={ufValue}
                  className="w-16"
                  placeholder="UF"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="bg-base-300 rounded-lg w-[640px] h-52 mt-4 p-10">
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
              <button
                type="button"
                onClick={onClickCredito}
                className="w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3"
              >
                <CreditCard className="text-purple-300" weight="bold" />
                <span>Cartão de crédito</span>
              </button>
              <button
                type="button"
                onClick={onClickDebito}
                className="  w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3"
              >
                <CreditCard className="text-purple-300" weight="bold" />
                <span>Cartão de débito</span>
              </button>
              <button
                type="button"
                onClick={onClickDinheiro}
                className="w-44 h-12 rounded-md bg-base-700 flex items-center p-3 gap-3"
              >
                <Money className="text-purple-300" weight="bold" />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </form>
        <div className="ml-8">
          <div className="mb-4 text-xl font-semibold font-itim">
            Cafés selecionados
          </div>

          <div>
            <div className="bg-base-300 rounded-lg w-[448px] h-[498]">
              {cartItens.map((item: any) => (
                // eslint-disable-next-line react/jsx-key
                <CardMap
                  coffee={item.item.coffee}
                  price={item.item.price}
                  quantity={item.quantity}
                  title={item.item.title}
                />
              ))}

              <div className="flex flex-col px-10 py-6 gap-2">
                <div className="flex justify-between text-sm">
                  <div>Total de itens</div>
                  <div>
                    <div>R$ {cartItensSomQuantity()}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Entrega</div>
                  <div>R$ 7.50</div>
                </div>
                <div className="flex  justify-between text-base font-bold">
                  <div>Total</div>
                  <div>R$ {cartItensSomQuantity() + 7.5}</div>
                </div>

                <Link
                  href={{
                    pathname: `/checkOut`,
                    query: { route: "15" },
                  }}
                >
                  <button
                    onClick={clickclick}
                    className="bg-yellow-300 text-white font-bold text-center mt-2 rounded uppercase w-96 h-9 px-3 py-1"
                  >
                    Confirmar pedido
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// passar o valor dos inputs pra terceira pagina
// passar o valor dos botoes
//detalhes de css
// como fazer pra usar livremente o item.item.price por exemplo. posso criar uma constante pra ele uma funcao pra setar ele ?
// botar o focus com borda roxa
// perguntar como tira a borda de focus de algum botao especifico
// perguntar sobre o adress sublinhado
//botar o link da home na logo
// melhor jeito de fazer os botoes
// responsivo
// typar direito com as interfaces
// componentizar mais coisas

//perguntar sobre essa lombra da pagina bugar quando carrega ? e como se resolveria com local storage
//como usar locoal storage prasalvar a bolinha do carrinho
