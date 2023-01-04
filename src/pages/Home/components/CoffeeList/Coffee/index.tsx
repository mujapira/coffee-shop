import { ShoppingCart } from "phosphor-react";

import { Link } from "react-router-dom";
import { Counter } from "../../../../../components/Counter";
import { Coffee as ICoffee } from "../../../../../contexts/CoffeeContext";
import { AddToCart, ButtonsContainer, CoffeeCard, TagContainer } from "./styles";

type Props = {
  coffee: ICoffee;
  quantity: number;
};

export function Coffee(props: Props) {
  const { coffee, quantity } = props;
  return (
    <CoffeeCard>
      <img src={`${[...coffee.image]}`} alt="" />

      <TagContainer>
        {[...coffee.tags].map((tag) => {
          return <div key={tag}>{tag}</div>;
        })}
      </TagContainer>

      <h3>{[...coffee.title]}</h3>
      <p>{[...coffee.description]}</p>

      <footer>
        <span>
          R$ <b>{[...[coffee.price]]}</b>
        </span>

        <ButtonsContainer>
          <Counter coffee={coffee} quantity={quantity} isCheckout={false}/>
          <Link to="/checkout">
            <AddToCart>
              <ShoppingCart size={22} weight={"fill"} />
            </AddToCart>
          </Link>
        </ButtonsContainer>
      </footer>
    </CoffeeCard>
  );
}
