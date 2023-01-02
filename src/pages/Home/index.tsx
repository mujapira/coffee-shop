import { Header } from "../../components/Header";
import { CoffeeListComponent } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import BackgroundImage from "../../assets/Background.svg";
import { HomeContainer } from "./styles";

export function Home() {


  return (
    <HomeContainer style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Header />
      <Intro />
      <CoffeeListComponent />
    </HomeContainer>
  );
}
