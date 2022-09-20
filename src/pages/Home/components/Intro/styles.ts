import styled from "styled-components";

export const IntroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 160px;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 0.8fr 0.25fr;
  gap: 25px 25px;
  grid-template-areas:
    "content image"
    "icons image";
  gap: 80px;

  @media screen and (max-width: 1440px) {
    padding: 30px 16px;
    gap: 10px;
  }

  @media screen and (max-width: 1150px) {
    grid-template-areas:
      "content content"
      "icons image";

    grid-auto-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "content"
      "image"
      "icons";

    grid-auto-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
`;

export const IntroInfo = styled.div`
  grid-area: content;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    margin-bottom: 16px;
    font-family: "Baloo 2", cursive;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;

    h1 {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;

export const IconsContainer = styled.div`
  grid-area: icons;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, auto);
  width: 100%;
  gap: 30px 20px;

  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
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

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;

  @media screen and (max-width: 1150px) {
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    img {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
      max-width: 50%;
    }
  }
`;
