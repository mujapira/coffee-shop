import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { ShoppingCartContainer } from "./styles";

export function Cart() {
  const { cartItems } = useContext(CoffeeContext);
  const [cartAmount, setCartAmount] = useState(0);

  let value = 0;
  for (let i = 0; i < cartItems.length; i++) {
    value += cartItems[i].quantity!;
  }

  return (
    <ShoppingCartContainer>
      <ShoppingCart size={22} weight="fill" />

      <span>{value}</span>
    </ShoppingCartContainer>
  );
}
