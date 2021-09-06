import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import {local, lang} from "./langs/langSettings";


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={local} messages={lang}>
        <App />
    </IntlProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
reportWebVitals();
