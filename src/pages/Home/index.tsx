import { Header } from "../../components/Header";
import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";

export function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <CoffeeList />
    </div>
  );
}
