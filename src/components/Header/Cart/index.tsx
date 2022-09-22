import { ShoppingCart } from "phosphor-react";
import { ShoppingCartContainer } from "./styles";

export function Cart() {
  return (
    <ShoppingCartContainer>
      <ShoppingCart size={22} weight="fill" />

      <span>0</span>
    </ShoppingCartContainer>
  );
}
