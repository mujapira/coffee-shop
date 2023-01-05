import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { ShoppingCartContainer } from "./styles";

export function Cart() {
  const { amount } = useContext(CoffeeContext);

  return (
    <ShoppingCartContainer>
      <ShoppingCart size={22} weight="fill" />

      <span>{amount}</span>
    </ShoppingCartContainer>
  );
}
