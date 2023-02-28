import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  createTheme,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { Global } from '@emotion/react';
import { getAppTheme } from 'styles/theme';
import { globalStyles } from 'styles/globalStyles';
import { RootPage } from 'containers/RootPage';
import { AppContext } from 'store/hooks/UseApp/Context';
import { useAppController } from 'store/hooks/UseApp/controller';

interface AppProps {
  mode?: PaletteMode;
}

const App = ({ mode = 'light' }: AppProps) => {
  const theme = createTheme(getAppTheme(mode));

  const controller = useAppController();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <BrowserRouter>
          <AppContext.Provider value={controller}>
            <RootPage />
          </AppContext.Provider>
        </BrowserRouter>
      </Box>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
