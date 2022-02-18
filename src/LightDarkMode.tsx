import React, { useState, createContext, useContext } from 'react';

/**
 *
 * Build a simple app that allows the user to toggle light and dark mode as a react hook.
 *
 * Components will need a useMode() hook either 'light' or 'dark' so that they can change
 * their internal CSS.
 *
 * There should also be a way to useModeToggler() which returns a function that can be used
 * to toggle light or dark mode.
 *
 * The idea is that you have a way to globally mark the theme for the entire
 * app, then a hook that can be used to change the theme.
 *
 */


enum MODES {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeModeContext = createContext({
  themeMode: MODES.LIGHT,
  setThemeMode: (mode: MODES) => {},
});

export const App = () => {
  const [themeMode, setThemeMode] = useState(MODES.LIGHT);
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <Main />
    </ThemeModeContext.Provider>
  );
};

export const Main = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

export const Settings = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const toggleMode = React.useCallback(() => {
    setThemeMode(themeMode === MODES.DARK ? MODES.LIGHT : MODES.DARK);
  }, [themeMode, setThemeMode]);

  return <button onClick={toggleMode}>toggle light/dark mode</button>;
};



