import { IRoute, IPageRoute } from 'store/types';
import MainLayout from 'containers/MainLayout';
import SearchPage from 'pages/SearchPage';
import BookDetailsPage from 'pages/BookDetailsPage';
import FavoritesPage from 'pages/FavoritesPage';

export const appMainRoutes: IRoute[] = [
  {
    key: 'layout-route',
    title: 'Main',
    path: '/*',
    component: MainLayout,
    enabled: true,
  },
];

export const appPageRoutes: IPageRoute[] = [
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
