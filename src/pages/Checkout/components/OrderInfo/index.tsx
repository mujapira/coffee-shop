import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { useContext } from "react";
import { Coffee, CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  CardContainer,
  CardWrapper,
  CounterContainer,
  FlagsContainer,
  FormContainer,
  ImageContainer,
  MiddleContainer,
  OrderInfoContainer,
  OrderSummary,
  PaymentContainer,
  Price,
  PriceContainer,
  Summary,
  SummaryCard,
  SummaryItem,
  Title,
  Total,
  TrashButton,
} from "./styled";
import Minus from "../../../../assets/minus.svg";
import Plus from "../../../../assets/plus.svg";

interface Address {
  cep: number;
  city: string;
  district: string;
  street: string;
  number: number;
  aditional?: string;
}
export function OrderInfo() {
  const { cartItems, handleItemCart, coffeeList, cartPrice } = useContext(CoffeeContext);
  const deliveryTax = 4;

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

            <FormContainer>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </FormContainer>
          </CardContainer>
        </CardWrapper>

        <PaymentContainer>
          <div>
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <h3>Pagamento</h3>
              <span>O pagamento é feito na entrega. Escolha a forma que seja pagar</span>
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

      <OrderSummary>
        <h1>Cafés selecionados</h1>

        <div>
          {cartItems.map((item) => {
            const coffee = coffeeList.find((coffee: Coffee) => coffee.id == item.id)!;

            return (
              <SummaryItem key={item.id}>
                <SummaryCard>
                  <ImageContainer>
                    <img src={coffee.image} alt={coffee.image} />
                  </ImageContainer>
                  <MiddleContainer>
                    <span>{coffee.title}</span>
                    <div>
                      <CounterContainer>
                        <span onClick={() => handleItemCart(coffee.id, "minus")}>
                          <img src={Minus} alt="" />
                        </span>
                        <span>{item.quantity ?? 0}</span>
                        <span onClick={() => handleItemCart(coffee.id, "plus")}>
                          <img src={Plus} alt="" />
                        </span>
                      </CounterContainer>
                      <TrashButton>
                        <Trash />
                        <span>REMOVER</span>
                      </TrashButton>
                    </div>
                  </MiddleContainer>
                  <PriceContainer>
                    <b>R${coffee.price}</b>
                  </PriceContainer>
                </SummaryCard>
                <span />
              </SummaryItem>
            );
          })}
          <Summary>
            <div>
              <p>
                <Title>Total de itens</Title>
                <Price>R$ {cartPrice}</Price>
              </p>
              <p>
                <Title>Entrega</Title>
                <Price>R$ {deliveryTax}</Price>
              </p>
              <Total>
                <Title>Total</Title>
                <Price>R$ {cartPrice + deliveryTax}</Price>
              </Total>
            </div>
          </Summary>
        </div>
      </OrderSummary>
    </OrderInfoContainer>
  );
}
