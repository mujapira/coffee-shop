import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  padding: 300px 160px 0px;

  justify-content: space-between;
  .first {
    align-items: flex-start;
  }

  .second {
    align-items: center;
    justify-content: flex-end;
  }
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;


    .header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
      h3 {
        font-family: "Baloo 2";
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        color: ${(props) => props.theme["yellow-dark"]};
      }
      > span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
      }
    }
  }
`;

export const DeliveryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 8px 40px;
  margin-top: 40px;
  gap: 32px;
  width: 100%;
  p {
    display: flex;
    gap: 12px;
    .image-container {
      border-radius: 100%;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme["base-white"]};
      }
    }
    .image-container.a {
      background-color: ${(props) => props.theme["purple"]};
    }
    .image-container.b {
      background-color: ${(props) => props.theme["yellow"]};
    }
    .image-container.c {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }

    div {
      display: flex;
      flex-direction: column;
      span {
        b {
        }
      }
      b {
      }
    }
  }
`;
