import styled from "styled-components";

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  text-align: center;
  position: relative;

  padding-top: 7rem;
  margin-top: 20px;

  gap: 0.5rem;

  img {
    max-width: 7.5rem;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
  }

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-family: "Baloo 2", cursive;
  }
  p {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    padding: 0px 50px;

    @media screen and (max-width: 1250px) {
      padding: 0px 10px;
    }
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    b {
      font-family: "Baloo 2", cursive;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow"]};
    width: auto;
    padding: 4px 10px;
    border-radius: 100px;
    font-size: 0.725rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
