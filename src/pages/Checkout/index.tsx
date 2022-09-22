import { Header } from "../../components/Header";
import { OrderInfo } from "./components/OrderInfo";
import { CheckoutContainer } from "./styled";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header />
      <OrderInfo />
    </CheckoutContainer>
  );
}
