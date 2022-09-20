import { CoffeeCard, TagContainer } from "./styles";

interface Coffee {
  id?: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function Coffee({ ...props }: Coffee) {
  return (
    <CoffeeCard>
      <img src={`${[...props.image]}`} alt="" />

      <TagContainer>
        {[...props.tags].map((tag) => {
          return <div>{tag}</div>;
        })}
      </TagContainer>

      <h3>{[...props.title]}</h3>
      <p>{[...props.description]}</p>
      <span>
        R$ <b>{[...[props.price]]}</b>
      </span>
    </CoffeeCard>
  );
}
