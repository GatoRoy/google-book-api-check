import React, { createContext } from 'react';
import { IAppController } from 'store/types';

interface IAppContext extends IAppController {}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppContext');
  }
  return context;
};
