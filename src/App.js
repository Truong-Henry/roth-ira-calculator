import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./DarkModeComponents/useDarkMode";
import { GlobalStyles } from "./DarkModeComponents/GlobalStyles";
import { lightTheme, darkTheme } from "./DarkModeComponents/Themes";
import Toggle from "./DarkModeComponents/Toggler";
import Roth from "./RothComponents/Roth";
import { RothContextProvider } from "./RothComponents/rothContext";

function App() {
  const { theme, themeToggler, mountedComponent } = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggle = <Toggle theme={theme} themeToggler={themeToggler} />;

  return mountedComponent ? (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <RothContextProvider>
        <Roth toggle={toggle} />
      </RothContextProvider>
    </ThemeProvider>
  ) : (
    <div />
  );
}

export default App;
