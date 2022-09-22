import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={Logo} />
        </Link>

        <InfoContainer>
          <Link to="/checkout">
            <LocationContainer>
              <MapPin size={22} weight="fill" />
              <span> Itu, SP</span>
            </LocationContainer>
          </Link>
          <Link to="/checkout">
            <Cart />
          </Link>
        </InfoContainer>
      </HeaderContainer>
    </Background>
  );
}
