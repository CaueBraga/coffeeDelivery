import Image from "next/image";
import { MapPin, ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import { useState } from "react";

export function Cards({ coffee, type, title, text, price, addToCart }: any) {
  const [counter, setCounter] = useState<number>(1);

  function handleCounterUp() {
    setCounter(counter + 1);
  }
  function handleCounterDown() {
    setCounter(counter - 1);
  }

  function handleAddToCart() {
    addToCart(
      {
        coffee: coffee,
        type: type,
        title: title,
        text: text,
        price: price,
      },
      counter
    );
  }

  return (
    <>
      <div className="w-64 h-80  bg-base-500 rounded-tl-md mt-14 rounded-tr-3xl rounded-br-md rounded-bl-3xl  flex flex-col items-center mr-4">
        <Image className="-mt-5" width={100} height={100} src={coffee} alt="" />

        <div className="flex gap-2">
          {type.map((type: string) => (
            // eslint-disable-next-line react/jsx-key
            <div className="my-3 px-2 py-1 text-xs font-bold uppercase bg-yellow-100 text-yellow-500 rounded-full">
              {type}
            </div>
          ))}
        </div>

        <div className="font-extrabold text-xl my-2">{title}</div>

        <p className="text-center text-sm text-gray-100 w-56 leading-4 mb-8">
          {text}
        </p>

        <div className="flex items-center justify-between">
          <div className="font-extrabold mr-9 text-2xl font-itim text-gray-500">
            R$ {price}
          </div>

          <div className="flex items-center">
            <div className=" mr-4 flex items-center justify-between text-xl text-purple-300 bg-base-700 p-2 w-16 h-9 rounded-md">
              <button className="focus:shadow-none" onClick={handleCounterDown}>
                {" "}
                -{" "}
              </button>
              <div>{counter}</div>
              <button className="focus:shadow-none" onClick={handleCounterUp}>
                {" "}
                +{" "}
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="p-2 focus:disabled:border bg-purple-300 rounded"
            >
              <ShoppingCart size={20} weight="fill" color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
