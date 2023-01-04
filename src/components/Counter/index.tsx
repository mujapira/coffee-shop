import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext, Coffee as ICoffee } from "../../contexts/CoffeeContext";
import { CounterContainer, TrashButton } from "./styled";

type Props = {
  coffee: ICoffee;
  quantity: number;
  isCheckout: boolean;
};

export function Counter(props: Props) {
  const { coffee, quantity, isCheckout } = props;
  const { handleItemCart } = useContext(CoffeeContext);
  const [productQuantity, setProductQuantity] = useState(0);

  function remove() {
    setProductQuantity(0);
    handleItemCart(coffee.id, "remove");
  }

  const verifyQuantity = () => {
    if (quantity === 0) {
      setProductQuantity(0);
    }
    if (quantity === 1) {
      setProductQuantity(1);
    }
    if (quantity > 1) {
      setProductQuantity(2);
    }
  };

  useEffect(() => {
    verifyQuantity();
  }, [quantity]);

  return (
    <>
      {!isCheckout ? (
        <CounterContainer>
          {productQuantity === 0 && (
            <button onClick={() => handleItemCart(coffee.id, "minus")}></button>
          )}
          {productQuantity === 1 && (
            <span onClick={() => remove()} title="Remove from cart">
              <button>
                <Trash />
              </button>
            </span>
          )}
          {productQuantity > 1 && (
            <button onClick={() => handleItemCart(coffee.id, "minus")} title="Decrease quantity">
              -
            </button>
          )}

          <p>{quantity ?? 0}</p>

          <button onClick={() => handleItemCart(coffee.id, "plus")} title="Increase quantity">
            +
          </button>
        </CounterContainer>
      ) : (
        <>
          <CounterContainer>
            {productQuantity === 0 && (
              <button onClick={() => handleItemCart(coffee.id, "minus")}></button>
            )}
            {productQuantity === 1 && (
              <span onClick={() => remove()} title="Remove from cart"></span>
            )}
            {productQuantity > 1 && (
              <button onClick={() => handleItemCart(coffee.id, "minus")} title="Decrease quantity">
                -
              </button>
            )}

            <p>{quantity ?? 0}</p>

            <button onClick={() => handleItemCart(coffee.id, "plus")} title="Increase quantity">
              +
            </button>
          </CounterContainer>

          <TrashButton onClick={() => remove()}>
            <Trash />
            <span>REMOVER</span>
          </TrashButton>
        </>
      )}
    </>
  );
}
