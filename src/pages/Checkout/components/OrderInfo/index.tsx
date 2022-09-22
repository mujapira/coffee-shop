import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  CardContainer,
  CardWrapper,
  CounterContainer,
  FlagsContainer,
  LocationContainer,
  OrderInfoContainer,
  PaymentContainer,
} from "./styled";
import Minus from "../../../../assets/minus.svg";
import Plus from "../../../../assets/plus.svg";

export function OrderInfo() {
  const { cartItems, addItem } = useContext(CoffeeContext);
  return (
    <OrderInfoContainer>
      <div>
        <CardWrapper>
          <h1>Complete seu pedido</h1>
          <CardContainer>
            <div>
              <div>
                <MapPinLine size={22} />
              </div>
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <form action="">
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </form>
          </CardContainer>
        </CardWrapper>

        <PaymentContainer>
          <div>
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que seja pagar
              </span>
            </div>
          </div>

          <FlagsContainer>
            <div>
              <CreditCard />
              <span>Cartão de crédito</span>
            </div>
            <div>
              <Bank />
              <span>Cartão de débito</span>
            </div>
            <div>
              <Money />
              <span>Dinheiro</span>
            </div>
          </FlagsContainer>
        </PaymentContainer>
      </div>

      <LocationContainer>
        <h1>Cafés selecionados</h1>
        <div>
          {cartItems.map((item) => {
            return (
              <>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <span>{item.title}</span>
                  <b>R${item.price}</b>
                </div>
                <div>
                  <CounterContainer>
                    <span>
                      <img src={Minus} alt="" />
                    </span>
                    <span>0</span>
                    <span onClick={() => addItem(item)!}>
                      <img src={Plus} alt="" />
                    </span>
                  </CounterContainer>
                  <button>
                    <Trash />
                    <span>remover</span>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </LocationContainer>
    </OrderInfoContainer>
  );
}
