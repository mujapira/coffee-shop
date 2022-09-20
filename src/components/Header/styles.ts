import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 32px 160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;
