import Link from "next/link";
import Image from "next/image";
import { MapPin, ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";

export function Header(): JSX.Element {
  const { cartItens } = useContext(CartContext);

  function cartItensQuantity() {
    let total = 0;
    for (let i = 0; i < cartItens.length; i++) {
      total = total + cartItens[i].quantity;
    }

    return total;
  }

  return (
    <>
      <header className="flex justify-between w-full">
        <Link
          className="focus:shadow-none"
          href={{
            pathname: `/`,
          }}
        >
          <Image width={85} height={40} src="/Logo.svg" alt="" />
        </Link>
        <div className="flex items-center">
          <div className="flex items-center mr-4 bg-purple-100 p-2 rounded">
            <MapPin className="mr-3 text-purple-300 w-5 h-5" weight="fill" />{" "}
            <div>Brasília, DF</div>
          </div>

          <div className="relative">
            <div className="bg-yellow-300 text-white rounded-full w-5 h-5 text-center absolute p-2 -top-3 left-6 flex items-center justify-center ">
              {cartItensQuantity()}
            </div>
            <Link
              className="focus:shadow-none"
              href={{
                pathname: `/shopping`,
                query: { route: "14" },
              }}
            >
              <div className="bg-yellow-100 p-2 rounded">
                <ShoppingCart
                  weight="fill"
                  color="#DBAC2C"
                  width={22}
                  height={22}
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
