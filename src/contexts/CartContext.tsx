import { createContext, useState } from "react";

interface CartContextType {
  cartItens: [] | any;
  addToCart: (arg1: any, arg2: number) => void;
  setCartItens: Function;
  setCepValue: Function;
  setQuadraValue: Function;
  setNumeroValue: Function;
  setBairroValue: Function;
  setNomeValue: Function;
  setCidadeValue: Function;
  setUfValue: Function;
  setFormaDePagamento: Function;
  setTotalPrice: Function;
  cepValue: String;
  bairroValue: String;
  cidadeValue: String;
  quadraValue: String;
  nomeValue: String;
  ufValue: String;
  numeroValue: String;
  totalPrice: Number;
  formaDePagamento: String;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: any) {
  const [cartItens, setCartItens] = useState<any[]>([]);

  const [cepValue, setCepValue] = useState<string>("");
  const [quadraValue, setQuadraValue] = useState<string>("");
  const [numeroValue, setNumeroValue] = useState<string>("");
  const [bairroValue, setBairroValue] = useState<string>("");
  const [nomeValue, setNomeValue] = useState<string>("");
  const [cidadeValue, setCidadeValue] = useState<string>("");
  const [ufValue, setUfValue] = useState<string>("");
  const [formaDePagamento, setFormaDePagamento] = useState<any>("");
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
          setCepValue,
          setBairroValue,
          setCidadeValue,
          setNomeValue,
          setNumeroValue,
          setUfValue,
          setQuadraValue,
          setFormaDePagamento,
          setTotalPrice,
          bairroValue,
          cepValue,
          cidadeValue,
          formaDePagamento,
          nomeValue,
          numeroValue,
          quadraValue,
          totalPrice,
          ufValue,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
