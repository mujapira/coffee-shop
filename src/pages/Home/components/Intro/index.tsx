import {
  ContentContainer,
  IconContainer,
  IconsContainer,
  ImageContainer,
  IntroContainer,
} from "./styles";
import CoffeeImage from "../../../../assets/Image.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
export function Intro() {
  return (
    <IntroContainer>
      <ContentContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Shop você recebe seu café onde estiver, a qualquer hora
          </span>
        </div>

        <IconsContainer>
          <IconContainer>
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </IconContainer>

          <IconContainer>
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </IconContainer>

          <IconContainer>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </IconContainer>

          <IconContainer>
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </IconContainer>
        </IconsContainer>
      </ContentContainer>
      <ImageContainer>
        <img src={CoffeeImage} alt="" />
      </ImageContainer>
    </IntroContainer>
  );
}
