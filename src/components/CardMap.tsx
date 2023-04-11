import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { Trash } from "phosphor-react";
import { useContext } from "react";

export function CardMap({ coffee, price, title, quantity }: any): JSX.Element {
  const { cartItens, setCartItens } = useContext(CartContext);

  function handleDelete(): void {
    const newArray = cartItens.filter((item: any) => item.item.title !== title);
    setCartItens(newArray);
    localStorage.setItem("cartItens", newArray);
  }

  function handleCounterUp(title: string) {
    const newCart = cartItens.map((item: any) =>
      item.item.title !== title ? item : { ...item, quantity: quantity + 1 }
    );
    setCartItens(newCart);
  }

  function handleCounterDown(title: string) {
    const newCart = cartItens.map((item: any) =>
      item.item.title !== title ? item : { ...item, quantity: quantity - 1 }
    );
    setCartItens(newCart);
  }

  return (
    <>
      <div className="bg-base-300 w-[448px] rounded-lg  px-10 py-6 ">
        <div className="flex items-center gap-6 relative">
          <Image width={85} height={40} src={coffee} alt="" />
          <div>
            <p>{title}</p>
            <div className="flex mt-2">
              <div className=" mr-4 flex items-center justify-between text-xl text-purple-300 bg-base-700 p-2 w-16 h-9 rounded-md">
                <button
                  className="focus:shadow-none"
                  onClick={() => handleCounterDown(title)}
                >
                  {" "}
                  -{" "}
                </button>
                <div>{quantity}</div>
                <button
                  className="focus:shadow-none"
                  onClick={() => handleCounterUp(title)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button
                onClick={handleDelete}
                className=" flex items-center gap-2 p-2 uppercase text-xs  text-purple-300 bg-base-700 w-24 h-9 rounded-md"
              >
                <Trash width={16} height={16} /> <div>remover</div>
              </button>
            </div>
          </div>
          <div className="absolute  right-0 top-1">R$ {price * quantity}</div>
        </div>
        <div className="bg-black w-full mt-3 text-center h-[1px]"></div>
      </div>
    </>
  );
}
