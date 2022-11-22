import styled from "styled-components";

export const OrderInfoContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-template-rows: 1fr;
  gap: 100px;

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

  form {
    display: flex;
    flex-direction: column;
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

export const LocationContainer = styled.div`
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

export const CounterContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  padding: 0px 10px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["base-title"]};
    cursor: pointer;
    font-size: 1rem;
    font-weight: regular;
    img {
      width: 14px;
    }
  }
`;
