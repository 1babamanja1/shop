import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { light, dark, GlobalStyles } from './Theme/theme';
import ShopRouter from './Router/Router';
import store from './redux/store';
import Button from './Components/Button';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
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
          {/* header here */}
          <ShopRouter />
        </StyledApp>
      </ThemeProvider>
    </Provider>
  );
}
