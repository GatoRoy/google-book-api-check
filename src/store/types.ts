import { FC } from 'react';
import { IBookResult, ISearchSummaryResponse } from './api/apiTypes';

export interface IBookSearchData {
  searchTerm: string;
  searchSummary?: ISearchSummaryResponse;
  selectedPage?: number;
  searchResultData: IBookList;
  selectedBookId?: string;
  selectedBook?: IBookData;
}

export interface IBookSearchController extends IBookSearchData {
  pageRoutes: IRoute[];
  setSearchTerm: (newSearchTerm: string) => void;
  setSelectedPage: (pageToSelect?: number) => void;
  setSelectedBookId: (bookToSelect?: string) => void;
}

export interface IRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  inHeader: boolean;
  component: FC<{}>;
}

export interface IListItemData {
  id: string;
  type?: string;
  title: string;
  description?: string;
  imageName?: string;
  imageFilePath?: string;
  isFavorite?: boolean;
}

export interface IBookData extends IListItemData {
  extendedData: IBookResult;
}

export interface IListData<TItem extends IListItemData> {
  totalCount: number;
  currentItems: TItem[];
  pageCount: number;
}

export interface IBookList extends IListData<IBookData> {}

export type IFavoriteBookMap = Record<string, boolean>;