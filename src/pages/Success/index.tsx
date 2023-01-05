import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import { ContentContainer, DeliveryCard } from "./styled";
import { Illustration } from "./Components/Illustration";
import { api } from "../../lib/axios";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

interface Order {
  cep: number;
  street: string;
  number: number;
  additional: string;
  district: string;
  city: string;
  state: string;
  payment: string;
}

export function Success() {
  const { setCartItems, cartItems } = useContext(CoffeeContext);

  const [order, setOrder] = useState<Order>();
  async function fetchOrder() {
    const response = await api.get("purchases/1");
    const orderData = response.data.data;
    setOrder(orderData);
  }

  function clearCart() {
    setCartItems([]);
  }

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function clearOrder() {
    await timeout(3000);
    return await api.delete("/purchases/1");
  }

  useEffect(() => {
    fetchOrder();
    clearCart();
    clearOrder();
  }, []);

  return (
    <>
      <Header />
      <ContentContainer>
        <>
          {!order ? (
            <span>Compre algo antes :)</span>
          ) : (
            <>
              <div className="first">
                <div className="header">
                  <h3>Uhu! Pedido confirmado</h3>
                  <span>agora é só aguardar que logo o café chegará até você</span>
                </div>

                <DeliveryCard>
                  <p>
                    <div className="image-container a">
                      <MapPin weight="fill" />
                    </div>
                    <div>
                      <span>
                        Entrega em{" "}
                        <b>
                          {" "}
                          {order?.street}, {order?.number}
                        </b>
                      </span>
                      <span>
                        {order?.district} - {order?.city}, {order?.state}
                      </span>
                    </div>
                  </p>

                  <p>
                    <div className="image-container b">
                      <Timer weight="fill" />
                    </div>
                    <div>
                      <span>Previsão de entrega</span>
                      <b>20min - 30min</b>
                    </div>
                  </p>

                  <p>
                    <div className="image-container c">
                      <CurrencyDollar weight="fill" />
                    </div>
                    <div>
                      <span>Pagamento na entrega</span>
                      {order?.payment === "credit" && <span>Cartão de crédito</span>}
                      {order?.payment === "debit" && <span>Cartão de débito</span>}
                      {order?.payment === "cash" && <span>Dinheiro</span>}
                    </div>
                  </p>
                </DeliveryCard>
              </div>
              <div className="second">
                <Illustration />
              </div>
            </>
          )}
        </>
      </ContentContainer>
    </>
  );
}
