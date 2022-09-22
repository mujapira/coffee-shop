import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

export function OrderInfo() {
  const { cartItems } = useContext(CoffeeContext);
  return (
    <>
      <div>oi</div>
      {cartItems.map((item) => {
        return (
          <>
            <div>{item.title}</div>
            <div>1</div>
          </>
        );
      })}
    </>
  );
}