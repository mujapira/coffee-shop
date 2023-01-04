import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 10px;
  padding: 8px;
  height: 38px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme["purple"]};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }

    svg {
      width: 1rem;
      color: ${(props) => props.theme["purple"]};
      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
  > p {
    color: ${(props) => props.theme["base-title"]};
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