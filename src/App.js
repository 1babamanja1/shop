import "./App.css";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { theme } from "./Theme/theme";
import { ThemeContext } from "./Theme/Provider";
import ThemeProvider from "./Theme/Provider";
import {Form} from "./Components/Form";


const getStyle = (type) => {
  return {
    color: theme[type].color,
    backgroundColor: theme[type].backgroundColor,
  };
};

export default function App() {
  const { mode, setMode } = useContext(ThemeContext);
  const style = getStyle(mode);
  return (
    <ThemeProvider>
      <div style={style} className="App">
        <button onClick={setMode}>it's {mode} now</button>
        <FormattedMessage id="hiMess" defaultMessage="Hello With Error" />
        <Form/>
      </div>

    </ThemeProvider>
  );
}
