import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 160px;

  @media screen and (max-width: 1440px) {
    padding: 10px 16px;
  }

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
  }
`;
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 20px 0px;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
