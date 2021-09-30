import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import { light, dark, GlobalStyles } from './Theme/theme';
import ShopRouter from './Containers/Router/Router';
import store from './redux/store';
import { getCurrentTheme } from './redux/common/selectors';

export default function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}
const Body = () => {
  const theme = (useSelector(getCurrentTheme) === 'light' ? light : dark);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShopRouter />
    </ThemeProvider>
  );
};
