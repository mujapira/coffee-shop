import styled from "styled-components";

export const OrderInfoContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(1px, 640px) auto;
  grid-template-rows: 1fr;
  gap: 30px;
  padding: 0 160px;
  > div {
    display: flex;
    flex-direction: column;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

    > div {
      display: flex;
      flex-direction: column;
      svg {
        color: ${(props) => props.theme["yellow-dark"]};
      }
    }

    > div {
      display: flex;
      gap: 3px;

      h3 {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: normal;
      }
      span {
        color: ${(props) => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: normal;
      }
    }
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 12px;
    border-radius: 4px;

    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  gap: 2rem;
  margin-top: 12px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

    > div {
      display: flex;
      flex-direction: column;

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    }
    > div {
      display: flex;
      gap: 3px;

      h3 {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: normal;
      }
      span {
        color: ${(props) => props.theme["base-text"]};
        font-size: 0.875rem;
        font-weight: normal;
      }
    }
  }
`;

export const FlagsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
    gap: 10px;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};
    flex: 1;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
  > div {
    display: flex;
    flex-direction: column;

    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;
    padding: 40px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    margin: 24px 0px;
  }
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 80px;
  padding: 8px 4px;
  height: 100%;
  > div {
    > div {
      display: flex;
      gap: 20px;
    }
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 64px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const MiddleContainer = styled.div`
  flex: 1;
  padding-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

export const CounterContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  padding: 8px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["base-title"]};
    cursor: pointer;

    img {
      width: 14px;
    }
  }
`;

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  padding: 8px;
  transition: 0.3s;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: 0.3s;
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 400;
  }
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const Summary = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Title = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
`;
export const Price = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const Total = styled.p`
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
