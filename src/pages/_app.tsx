import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "@/contexts/CartContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />;
    </CartContextProvider>
  );
}
