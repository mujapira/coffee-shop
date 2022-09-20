import { CoffeeContainer } from "./styles";

interface Coffee {
  id?: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
}

export function Coffee({ ...props }: Coffee) {
  return (
    <CoffeeContainer>
      <div>{[...props.title]}</div>
      <div>{[...props.description]}</div>
      {[...props.tags].map((tag) => {
        return <div>{tag}</div>;
      })}
      <div>R$ {[...[props.price]]}</div>
    </CoffeeContainer>
  );
}
