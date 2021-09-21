import { createGlobalStyle } from 'styled-components';

export const light = {
  backgroundColor: '#F6F6F6',
  color: '#272B33',
};
export const dark = {
  backgroundColor: '#272B33',
  color: '#F6F6F6',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color}
  };`;

export const Colors = (type) => {
  switch (type) {
    case 'orange': {
      return '#FF9000';
    }
    case 'light-text': {
      return '#F1F1EC';
    }
    default: return '#000';
  }
};
