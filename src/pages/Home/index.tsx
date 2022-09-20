import { Header } from "../../components/Header";
import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import BackgroundImage from "../../assets/Background.svg";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Header />
      <Intro />
      <CoffeeList />
    </HomeContainer>
  );
}
