import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Coffee } from "./Coffee";
import { CoffeeListContainer, ListContainer } from "./styles";

export function CoffeeListComponent() {
  const coffeContext = useContext(CoffeeContext);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ListContainer>
        {coffeContext.coffeeList.map((coffee) => {
          return (
            <Coffee
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
              image={coffee.image}
            />
          );
        })}
      </ListContainer>
    </CoffeeListContainer>
  );
}
