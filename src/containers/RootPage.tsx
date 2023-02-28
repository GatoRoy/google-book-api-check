import React, { FC } from 'react';
import { useApp } from 'store/hooks/UseApp/Context';
import LoginPage from './LoginPage';
import MainLayout from './MainLayout';

export interface RootPageProps {}

export const RootPage: FC<RootPageProps> = () => {
  const { isLoggedIn } = useApp();

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return <MainLayout />;
};
