import Image from "next/image";
import { MapPin, ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import { useState } from "react";

export function Cards(card: any) {
  const [counter, setCounter] = useState<number>(0);

  function handleCounterUp() {
    setCounter(counter + 1);
  }
  function handleCounterDown() {
    setCounter(counter - 1);
  }
  return (
    <>
      <div className="w-64 h-80  bg-base-500 rounded-tl-md mt-14 rounded-tr-3xl rounded-br-md rounded-bl-3xl  flex flex-col items-center mr-4">
        <Image
          className="-mt-5"
          width={100}
          height={100}
          src={card.coffee}
          alt=""
        ></Image>
        <div className=" my-3 px-2 py-1 text-xs font-bold uppercase bg-yellow-100 text-yellow-500 rounded-full">
          {card.type}
        </div>
        <div className="font-extrabold text-xl my-2">{card.title}</div>
        <p className="text-center text-sm text-gray-100 w-56 leading-4 mb-8">
          {card.text}
        </p>

        <div className="flex items-center justify-between">
          <div className="font-extrabold mr-9 text-2xl font-itim text-gray-500">
            R$ 9,90
          </div>
          <div className="flex items-center">
            <div className=" mr-4 flex items-center justify-between text-xl text-purple-300 bg-base-700 p-2 w-16 h-9 rounded-md">
              <button onClick={handleCounterDown}> - </button>
              <div>{counter}</div>
              <button onClick={handleCounterUp}> + </button>
            </div>
            <div className="p-2 bg-purple-300 rounded">
              <ShoppingCart size={20} weight="fill" color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
