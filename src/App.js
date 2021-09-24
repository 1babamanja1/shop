import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import { light, dark, GlobalStyles } from './Theme/theme';
import ShopRouter from './Containers/Router/Router';
import store from './redux/store';
import getCurrentTheme from './redux/theme/selectors';

export default function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}
const Body = () => {
  const currentTheme = useSelector(getCurrentTheme);
  const theme = (currentTheme === 'light' ? light : dark);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShopRouter />
    </ThemeProvider>
  );
};
