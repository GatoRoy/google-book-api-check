import { FC } from 'react';
import { IBookResult, ISearchSummaryResponse } from './api/apiTypes';

export interface IAppController {
  isLoggedIn: boolean;
  setIfLoggedIn: (isLoggedIn: boolean) => void;
}

export interface IBookSearchData {
  searchTerm: string;
  searchSummary?: ISearchSummaryResponse;
  selectedPage?: number;
  searchResultData: IBookList;
  selectedBookId?: string;
  selectedBook?: IBookData;
}

export interface IBookSearchController extends IBookSearchData {
  setSearchTerm: (newSearchTerm: string) => void;
  setSelectedPage: (pageToSelect?: number) => void;
  setSelectedBook: (bookToSelect?: string) => void;
}

export interface IRoute {
  key: string;
  title: string;
  path: string;
  component: FC<{}>;
  enabled: boolean;
}

export interface IPageRoute extends IRoute {
  inHeader: boolean;
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
