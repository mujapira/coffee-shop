import styled from "styled-components";

export const Background = styled.header`
  width: 100%;
  background: ${(props) => props.theme["background"]};
  padding: 0px 160px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  padding: 32px 160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1440px) {
    padding: 10px 16px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 6px;
  padding: 8px;
  gap: 4px;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
  }
`;
