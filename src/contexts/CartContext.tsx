import { createContext, useState } from "react";

interface CartContextType {
  cartItens: [] | any;
  addToCart: (arg1: any, arg2: number) => void;
  setCartItens: Function;
  totalPrice: Number;
  formaDePagamento: String;
  setFormaDePagamento: Function;
  setTotalPrice: Function;
  setAddress: Function;
  address:
    | {
        bairro: String;
        cep: String;
        cidade: String;
        nome: String;
        numero: String;
        quadra: String;
        uf: String;
      }
    | any;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: any) {
  const [cartItens, setCartItens] = useState<any[]>([]);
  const [address, setAddress] = useState<any[]>([]);
  const [formaDePagamento, setFormaDePagamento] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<Number>(0);

  function addToCart(item: any, quantity: number) {
    const novoCartItens = [...cartItens, { item: item, quantity: quantity }];
    setCartItens(novoCartItens);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartItens,
          addToCart,
          setCartItens,
          setFormaDePagamento,
          setTotalPrice,
          formaDePagamento,
          totalPrice,
          address,
          setAddress,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
