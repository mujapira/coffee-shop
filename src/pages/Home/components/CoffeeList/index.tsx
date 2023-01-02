import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Coffee } from "./Coffee";
import { CoffeeListContainer, ListContainer } from "./styles";

export function CoffeeListComponent() {
  const { coffeeList, cartItems } = useContext(CoffeeContext);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ListContainer>
        {coffeeList?.map((coffee) => {
          const coffeeAtCart = cartItems.find((item) => item.id === coffee.id);
          return <Coffee key={coffee.id} coffee={coffee} quantity={coffeeAtCart?.quantity!} />;
        })}
      </ListContainer>
    </CoffeeListContainer>
  );
}
