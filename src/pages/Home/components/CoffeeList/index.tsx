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
        {coffeContext.coffeeList.map((coffe) => {
          return (
            <Coffee
              key={coffe.id}
              title={coffe.title}
              description={coffe.description}
              tags={coffe.tags}
              price={coffe.price}
            />
          );
        })}
      </ListContainer>
    </CoffeeListContainer>
  );
}
