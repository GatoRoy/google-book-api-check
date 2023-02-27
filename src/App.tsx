import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { appRoutes } from './appRoutes';
import { BookSearchContext } from 'store/Context';
import { useBookSearchController } from 'store/controller';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

interface AppProps {
  mode?: PaletteMode;
}

const App = ({ mode = 'light' }: AppProps) => {
  const theme = createTheme(getAppTheme(mode));

  const controller = useBookSearchController();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <BrowserRouter>
          <BookSearchContext.Provider value={controller}>
            <Navbar />
            <Routes>
              {appRoutes.map(
                route =>
                  route.enabled && (
                    <Route
                      key={route.key}
                      path={route.path}
                      element={<route.component />}
                    />
                  ),
              )}
            </Routes>
            <Footer />
          </BookSearchContext.Provider>
        </BrowserRouter>
      </Box>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
