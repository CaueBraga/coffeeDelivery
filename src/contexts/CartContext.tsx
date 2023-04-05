import { createContext, useEffect, useState } from "react";

interface CartContextType {
  cartItens: [] | any;
  addToCart: (arg1: any, arg2: number) => void;
  setCartItens: Function;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: any) {
  const [cartItens, setCartItens] = useState<any[]>([]);

  /*  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("cartItens") as any) || [];
    setCartItens(itens as any[]);
  }, []); */

  function addToCart(item: any, quantity: number) {
    const novoCartItens = [...cartItens, { item: item, quantity: quantity }];
    //localStorage.setItem("cartItens", JSON.stringify(novoCartItens));
    setCartItens(novoCartItens);
  }

  return (
    <>
      <CartContext.Provider value={{ cartItens, addToCart, setCartItens }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
