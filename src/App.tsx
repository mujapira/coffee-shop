import { ThemeProvider } from "styled-components";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeeProvider>
        <Home />
      </CoffeeProvider>
    </ThemeProvider>
  );
}
