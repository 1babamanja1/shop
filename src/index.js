import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { local, lang } from './services/langs/langSettings';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <IntlProvider locale={local} messages={lang}>
      <App />
    </IntlProvider>
  </React.StrictMode>,

  document.getElementById('root'),
);
reportWebVitals();
