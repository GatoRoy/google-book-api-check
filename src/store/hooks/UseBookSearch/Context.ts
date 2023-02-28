import React, { createContext } from 'react';
import { IBookSearchController } from 'store/types';

interface IBookSearchContext extends IBookSearchController {}

export const BookSearchContext = createContext<IBookSearchContext | undefined>(
  undefined,
);

export const useBookSearch = () => {
  const context = React.useContext(BookSearchContext);
  if (context === undefined) {
    throw new Error('useBookSearch must be used within a BookSearchContext');
  }
  return context;
};
