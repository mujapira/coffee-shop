import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useEffect } from "react";
import { Coffee, CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  CardContainer,
  CardWrapper,
  FlagsContainer,
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
} from "./styled";
import { Counter } from "../../../../components/Counter";
import { FormContainer } from "./styled";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../../../lib/axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const deliveryFormSchema = zod.object({
  cep: zod.number(),
  street: zod.string(),
  number: zod.number(),
  additional: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  payment: zod.enum(["credit", "debit", "cash"]),
});

type deliveryFormData = zod.infer<typeof deliveryFormSchema>;

export function OrderInfo() {
  const { cartItems, coffeeList, cartPrice, setCartItems } = useContext(CoffeeContext);
  const deliveryTax = 4;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<deliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      payment: "credit",
    },
  });

  function handleActivePaymentMethod(id: string) {
    const targetInput = document.getElementById(id);
    const container = targetInput?.parentElement?.parentElement!;
    const labels = container.querySelectorAll("label");
    for (let item of labels) {
      item.classList.remove("active");
    }
    targetInput?.parentElement?.classList.add("active");
  }

  async function handleDelivery(data: deliveryFormData) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    JSON.stringify(data);
    const response = await api
      .post("/purchases", {
        data: data,
      })
      .then(function (response) {
        setCartItems([]);
        return navigate("/success", { replace: true });
      });
  }

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const watchAllFields = watch();

  return (
    <OrderInfoContainer>
      <div>
        <form id="deliveryForm" onSubmit={handleSubmit(handleDelivery)}>
          <CardWrapper>
            <h1>Complete seu pedido</h1>
            <CardContainer>
              <header>
                <div>
                  <MapPinLine size={22} />
                </div>
                <div>
                  <h3>Endereço de Entrega</h3>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </header>

              <FormContainer>
                <input
                  className="short"
                  placeholder="CEP"
                  {...register("cep", { valueAsNumber: true })}
                  maxLength={8}
                  minLength={8}
                  required
                />
                <input placeholder="Rua" {...register("street")} required />
                <div>
                  <input
                    className="short"
                    placeholder="Número"
                    {...register("number", { valueAsNumber: true })}
                    required
                  />
                  <input placeholder="Complemento" {...register("additional")} required />
                </div>
                <div>
                  <input
                    className="short"
                    placeholder="Bairro"
                    {...register("district")}
                    required
                  />
                  <input placeholder="Cidade" {...register("city")} required />
                  <input className="super-short" placeholder="UF" {...register("state")} required />
                </div>
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

            <Controller
              control={control}
              name="payment"
              render={({ field }) => {
                return (
                  <FlagsContainer onValueChange={field.onChange} value={field.value}>
                    <label>
                      <CreditCard />
                      <span>Cartão de crédito</span>
                      <input
                        type="radio"
                        id="creditCard"
                        {...register("payment")}
                        onClick={() => handleActivePaymentMethod("creditCard")}
                        value="credit"
                      />
                    </label>
                    <label>
                      <Bank />
                      <span>Cartão de débito</span>
                      <input
                        type="radio"
                        id="debitCard"
                        {...register("payment")}
                        onClick={() => handleActivePaymentMethod("debitCard")}
                        value="debit"
                      />
                    </label>
                    <label>
                      <Money />
                      <span>Dinheiro</span>
                      <input
                        type="radio"
                        id="cash"
                        {...register("payment")}
                        onClick={() => handleActivePaymentMethod("cash")}
                        value="cash"
                      />
                    </label>
                  </FlagsContainer>
                );
              }}
            />
          </PaymentContainer>
        </form>
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
                      <Counter coffee={coffee} quantity={item.quantity ?? 0} isCheckout={true} />
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
                <Price>R$ {cartPrice.toFixed(2)}</Price>
              </p>
              <p>
                <Title>Entrega</Title>
                <Price>R$ {deliveryTax.toFixed(2)}</Price>
              </p>
              <Total>
                <Title>Total</Title>
                <Price>R$ {(cartPrice + deliveryTax).toFixed(2)}</Price>
              </Total>
              <button form="deliveryForm" type="submit" disabled={!isValid || isSubmitting}>
                CONFIRMAR PEDIDO
              </button>
            </div>
          </Summary>
        </div>
      </OrderSummary>
    </OrderInfoContainer>
  );
}
