import { useForm } from "react-hook-form";
import { MapPinLine, CurrencyDollar, CreditCard, Money } from "phosphor-react";
import { CardMap } from "@/components/CardMap";
import { useContext } from "react";
import { Header } from "@/components/Header";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import { couldStartTrivia } from "typescript";

export default function Shopping(): JSX.Element {
  const router = useRouter();

  const {
    cartItens,
    setAddress,
    setTotalPrice,
    setFormaDePagamento,
    formaDePagamento,
  } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  function submit(data: any) {
    setAddress(data);
    router.push("/checkOut");
  }

  function onClickCredito() {
    setFormaDePagamento("credit");
  }

  function onClickDebito() {
    setFormaDePagamento("debit");
  }

  function onClickDinheiro() {
    setFormaDePagamento("money");
  }

  function cartItensSomQuantity() {
    let total = 0;
    for (let i = 0; i < cartItens.length; i++) {
      total = total + cartItens[i].quantity * cartItens[i].item.price;
    }
    setTotalPrice(total + 7.5);
    return total;
  }

  return (
    <div className=" max-w-5xl mx-auto my-10">
      <Header />
      <div className="flex mt-12">
        <form
          className=" flex flex-col md:flex-row"
          onSubmit={handleSubmit(submit)}
        >
          <div>
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
                <input
                  id="cep"
                  placeholder="CEP"
                  type="text"
                  {...register("cep")}
                />
                <input
                  id="quadra"
                  placeholder="Quadra/Rua"
                  type="text"
                  {...register("quadra")}
                />
                <div>
                  <input
                    className="mr-5"
                    id="numero"
                    placeholder="Número"
                    type="text"
                    {...register("numero")}
                  />
                  <input
                    id="nome"
                    placeholder="Nome Completo"
                    type="text"
                    {...register("nome")}
                  />
                </div>
                <div className="flex justify-between">
                  <input
                    id="bairro"
                    placeholder="Bairro"
                    type="text"
                    {...register("bairro")}
                  />
                  <input
                    id="cidade"
                    className="w-64"
                    placeholder="Cidade"
                    type="text"
                    {...register("cidade")}
                  />
                  <input
                    id="uf"
                    className="w-16"
                    placeholder="UF"
                    type="text"
                    {...register("uf")}
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
          </div>

          <div className="ml-8 ">
            <div className="mb-4 text-xl font-semibold font-itim">
              Cafés selecionados
            </div>

            <div>
              <div className="bg-base-300 rounded-lg w-[448px] h-[498]">
                {cartItens.map((item: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <CardMap
                    key={item.item.id}
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

                  <button
                    disabled={!formaDePagamento}
                    type="submit"
                    className="bg-yellow-300  text-white font-bold text-center mt-2 rounded uppercase w-96 h-9 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Confirmar pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// responsivo
// botar o qye for preciso no loaclstorage

// deixar clean com o adrress como vitor fez
