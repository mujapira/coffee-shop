import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import Minus from "../../../../../assets/minus.svg";
import Plus from "../../../../../assets/plus.svg";
import { CoffeeContext } from "../../../../../contexts/CoffeeContext";
import {
  AddToCart,
  ButtonsContainer,
  CoffeeCard,
  CounterContainer,
  TagContainer,
} from "./styles";

interface Coffee {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function Coffee({ ...props }: Coffee) {
  const { cartItems, setCartItems } = useContext(CoffeeContext);
  let count = 0;
  function addItem(object: Coffee) {
    if (object.id === props.id) {
      count++;
    }
    setCartItems([...cartItems, props]);
  }

  return (
    <CoffeeCard>
      <img src={`${[...props.image]}`} alt="" />

      <TagContainer>
        {[...props.tags].map((tag) => {
          return <div key={tag}>{tag}</div>;
        })}
      </TagContainer>

      <h3>{[...props.title]}</h3>
      <p>{[...props.description]}</p>

      <footer>
        <span>
          R$ <b>{[...[props.price]]}</b>
        </span>

        <ButtonsContainer>
          <CounterContainer>
            <span>
              <img src={Minus} alt="" />
            </span>
            <span>{count}</span>
            <span onClick={() => addItem(props)!}>
              <img src={Plus} alt="" />
            </span>
          </CounterContainer>
          <AddToCart>
            <ShoppingCart size={22} weight={"fill"} />
          </AddToCart>
        </ButtonsContainer>
      </footer>
    </CoffeeCard>
  );
}
