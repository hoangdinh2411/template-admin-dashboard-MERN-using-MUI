import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material';
import {PaletteModeDark, PaletteModeLight} from './palette';
// 1. create a React context with function toggle color Mode
const ThemeContext = React.createContext({
  toggleColorMode: () => {},
});

function GlobalStyle({children}) {
  const [mode, setMode] = React.useState('light');
  // 2 : define toggleColorMode funcs
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  //3 create new theme dependent the "mode" state
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          common: {
            primary: '#3c9ec5',
          },
          //change palette by Mode
          ...(mode === 'light'
            ? PaletteModeLight
            : PaletteModeDark),
        },
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default GlobalStyle;
export {ThemeContext};
