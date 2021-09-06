import "./App.css";
import { useState } from "react";
import { light, dark, GlobalStyles } from "./Theme/theme";
import styled, { ThemeProvider } from "styled-components";
import ShopRouter from "./Router/Router";
import {Provider} from "react-redux";
import {store} from "./redux";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100px;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default function App() {
  const [theme, setTheme] = useState(light);
  const themeToggle = () => {
    setTheme(theme === light ? dark : light);
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <Button theme={theme} onClick={themeToggle}>Mode</Button>
          <ShopRouter />
        </StyledApp>
      </ThemeProvider>
    </Provider>
  );
}
