import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import {
  IBookSearchData,
  IBookSearchController,
  IRoute,
  IBookData,
  IBookList,
} from './types';
import { ISearchSummaryResponse } from './api/apiTypes';
import { NUMBER_OF_LIST_ITEMS_PER_PAGE } from './constants';
import { appPageRoutes } from 'appRoutes';
import apiGoogleBooks from './api/apiGoogleBooks';

export const useBookSearchController = (): IBookSearchController => {
  const pageRoutes: IRoute[] = appPageRoutes.filter(
    page => page.enabled && page.inHeader,
  );

  const [searchData, setSearchData] = useImmer<IBookSearchData>({
    searchTerm: '',
    searchSummary: undefined,
    selectedPage: 0,
    searchResultData: {
      totalCount: 0,
      currentItems: [],
      pageCount: 0,
    },
    selectedBookId: undefined,
    selectedBook: undefined,
  });

  const getSearchResultData = (
    searchSummary?: ISearchSummaryResponse,
  ): IBookList => {
    if (!searchSummary || searchSummary.totalItems <= 0) {
      return {
        totalCount: 0,
        currentItems: [],
        pageCount: 0,
      };
    }

    const results: IBookData[] = searchSummary.items.map(book => {
      return {
        id: book.id,
        name: book.volumeInfo.title,
        type: book.kind,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        imageName: book.volumeInfo.authors.join(', '),
        imageFilePath: book.volumeInfo.imageLinks.smallThumbnail,
        extendedData: book,
      };
    });
    return {
      totalCount: searchSummary.totalItems,
      currentItems: results,
      pageCount: Math.ceil(
        searchSummary.totalItems / NUMBER_OF_LIST_ITEMS_PER_PAGE,
      ),
    };
  };

  const doSearch = (): Promise<ISearchSummaryResponse | undefined> => {
    const { searchTerm, selectedPage } = searchData;

    return new Promise<ISearchSummaryResponse | undefined>(
      (resolve, reject) => {
        if (!searchTerm) {
          resolve(undefined);
          return;
        }

        const startIndex =
          selectedPage && selectedPage > 0
            ? NUMBER_OF_LIST_ITEMS_PER_PAGE * (selectedPage - 1)
            : 0;

        apiGoogleBooks
          .searchBooks(searchTerm, startIndex)
          .then((searchResponse: ISearchSummaryResponse) => {
            resolve(searchResponse);
          })
          .catch(reject);
      },
    );
  };

  const setSearchTerm = (newSearchTerm: string) => {
    setSearchData((draft: IBookSearchData) => {
      draft.searchTerm = newSearchTerm;
    });
  };

  const setSelectedPage = (pageNumber?: number) => {
    setSearchData((draft: IBookSearchData) => {
      draft.selectedPage = pageNumber;
    });
  };

  const setSelectedBookId = (bookId?: string) => {
    setSearchData((draft: IBookSearchData) => {
      draft.selectedBookId = bookId;

      const { currentItems } = draft.searchResultData;
      draft.selectedBook =
        currentItems && currentItems.find(book => book.id === bookId);
    });
  };

  useEffect(
    () => {
      doSearch().then(searchSummaryResponse => {
        setSearchData((draft: IBookSearchData) => {
          draft.searchSummary = searchSummaryResponse;
          draft.searchResultData = getSearchResultData(searchSummaryResponse);
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchData.searchTerm, searchData.selectedPage],
  );

  return {
    pageRoutes,
    ...searchData,
    setSearchTerm,
    setSelectedPage,
    setSelectedBookId,
  };
};
