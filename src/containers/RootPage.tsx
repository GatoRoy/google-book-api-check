import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appMainRoutes } from 'appRoutes';

export interface RootPageProps {}

export const RootPage: FC<RootPageProps> = () => {
  return (
    <Routes>
      {appMainRoutes.map(
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
  );
};
