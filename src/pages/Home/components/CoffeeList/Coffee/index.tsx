import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Minus from "../../../../../assets/minus.svg";
import Plus from "../../../../../assets/plus.svg";
import { CoffeeContext, Coffee as ICoffee } from "../../../../../contexts/CoffeeContext";
import { AddToCart, ButtonsContainer, CoffeeCard, CounterContainer, TagContainer } from "./styles";

type Props = {
  coffee: ICoffee;
  quantity: number;
};

export function Coffee(props: Props) {
  const { coffee, quantity } = props;
  const { handleItemCart } = useContext(CoffeeContext);

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
          <CounterContainer>
            <span onClick={() => handleItemCart(coffee.id, "minus")}>
              <img src={Minus} alt="" />
            </span>

            <span>{quantity ?? 0}</span>
            <span onClick={() => handleItemCart(coffee.id, "plus")}>
              <img src={Plus} alt="" />
            </span>
          </CounterContainer>

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
