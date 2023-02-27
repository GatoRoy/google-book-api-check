import { IRoute } from 'store/types';
import SearchPage from 'pages/SearchPage';
import BookDetailsPage from 'pages/BookDetailsPage';
import FavoritesPage from 'pages/FavoritesPage';

export const appRoutes: IRoute[] = [
  {
    key: 'search-route',
    title: 'Search',
    path: '/',
    enabled: true,
    inHeader: true,
    component: SearchPage,
  },
  {
    key: 'book-details-route',
    title: 'Book Details',
    path: '/book',
    enabled: true,
    inHeader: false,
    component: BookDetailsPage,
  },
  {
    key: 'favorites-route',
    title: 'Favorites',
    path: '/favorites',
    enabled: true,
    inHeader: true,
    component: FavoritesPage,
  },
];
