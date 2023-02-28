import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appPageRoutes } from 'appRoutes';
import { Box } from 'components/controls/Box';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = props => {
  return (
    <Box>
      <Navbar />
      <Routes>
        {appPageRoutes.map(
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
    </Box>
  );
};

export default MainLayout;
