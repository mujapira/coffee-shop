import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  background: ${(props) => props.theme["yellow-light"]};
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 6px;

  span {
    position: absolute;
    top: -8px;
    right: -8px;

    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["base-white"]};

    display: none;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: bold;
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
