import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { Router } from "./router/index";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
