import {createGlobalStyle} from "styled-components";

export const light = {
  backgroundColor: "#ffffff",
  color: "#6E7F80",
};
export const dark = {
  backgroundColor: "#6E7F80",
  color: "#ffffff"
};

export  const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color}
  };`