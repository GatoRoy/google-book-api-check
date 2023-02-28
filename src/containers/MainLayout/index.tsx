import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IPageRoute } from 'store/types';
import { BookSearchContext } from 'store/hooks/UseBookSearch/Context';
import { useBookSearchController } from 'store/hooks/UseBookSearch/controller';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import BookDetailsPage from 'containers/pages/BookDetailsPage';
import SearchPage from 'containers/pages/SearchPage';
import FavoritesPage from 'containers/pages/FavoritesPage';

const appPageRoutes: IPageRoute[] = [
  {
    key: 'book-details-route',
    title: 'Book Details',
    path: 'books/:id',
    inHeader: false,
    component: BookDetailsPage,
    enabled: true,
  },
  {
    key: 'search-route',
    title: 'Search',
    path: '/',
    inHeader: true,
    component: SearchPage,
    enabled: true,
  },
  {
    key: 'favorites-route',
    title: 'Favorites',
    path: 'favorites/',
    inHeader: true,
    component: FavoritesPage,
    enabled: true,
  },
];

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = props => {
  const controller = useBookSearchController();

  const pageRoutes = appPageRoutes.filter(page => page.enabled);

  return (
    <BookSearchContext.Provider value={controller}>
      <Navbar routes={pageRoutes} />
      <Routes>
        {pageRoutes.map(route => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />
    </BookSearchContext.Provider>
  );
};

export default MainLayout;
