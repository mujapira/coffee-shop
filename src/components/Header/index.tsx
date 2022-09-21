import { MapPin } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { Cart } from "./Cart";
import {
  Background,
  HeaderContainer,
  InfoContainer,
  LocationContainer,
} from "./styles";
export function Header() {
  return (
    <Background>
      <HeaderContainer>
        <img src={Logo}></img>
        <InfoContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span> Itu, SP</span>
          </LocationContainer>
          <Cart />
        </InfoContainer>
      </HeaderContainer>
    </Background>
  );
}
