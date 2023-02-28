import { useState } from 'react';
import { IAppController } from 'store/types';

export const useAppController = (): IAppController => {
  const [isLoggedIn, setIfLoggedIn] = useState<boolean>(false);

  return {
    isLoggedIn,
    setIfLoggedIn,
  };
};
