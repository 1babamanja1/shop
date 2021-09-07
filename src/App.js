import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { light, dark, GlobalStyles } from './Theme/theme';
import ShopRouter from './Router/Router';
import store from './redux/store';

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
    // eslint-disable-next-line react/jsx-filename-extension
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
