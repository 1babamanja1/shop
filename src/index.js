import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import ThemeProvider from "./Theme/Provider";
import Rus from "./langs/ru.json";
import Eng from "./langs/en-US.json";

let local = navigator.language;
let lang;
switch (local) {
  case "ru":
    lang = Rus;
    break;
  default:
    lang = Eng;
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={lang}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
reportWebVitals();
