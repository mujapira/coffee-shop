import styled from "styled-components";

export const IntroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 160px;
  gap: 80px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 50px;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    margin-bottom: 16px;
  }
  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, auto);
  width: 100%;
  gap: 40px 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: baseline;
  gap: 12px;

  div {
    color: ${(props) => props.theme["background"]};
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }

  :first-child div {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  :nth-child(2) div {
    background-color: ${(props) => props.theme["base-text"]};
  }

  :nth-child(3) div {
    background-color: ${(props) => props.theme["yellow"]};
  }

  :nth-child(4) div {
    background-color: ${(props) => props.theme["purple"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    flex-wrap: nowrap;
  }
`;

export const ImageContainer = styled.div``;
