import { createGlobalStyle } from 'styled-components';

export const light = {
  backgroundColor: '#F6F6F6',
  color: '#272B33',
  bigCardColor: '#fff',
};
export const dark = {
  backgroundColor: '#272B33',
  color: '#F6F6F6',
  bigCardColor: '#333844',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color}
  };`;

export const colors = {
  orange: '#FF9000',
  lightText: '#F1F1EC',
  grey: '#DEDEDE',
  darkGrey: '#282C34',
};

export const typeColor = {
  Bug: '#1CFF14',
  Dark: '#006262',
  Dragon: '#EB4C42',
  Electric: '#F4CA16',
  Fairy: '#F4A6D1',
  Fighting: '#9457EB',
  Fire: '#FF5107',
  Flying: '#C2FFFA',
  Ghost: '#DDDDE1',
  Grass: '#0F7E00',
  Ground: '#7E4B2A',
  Ice: '#19E7E7',
  Normal: '#838996',
  Psychic: '#BFDE68',
  Poison: '#00DE94',
  Steel: '#BBBBBB',
  Rock: '#8F8F8F',
  Water: '#0800EE',
  Unknown: '#000',
};
