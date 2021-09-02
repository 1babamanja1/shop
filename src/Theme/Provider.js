import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode: () => setMode(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
