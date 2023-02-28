import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImmer } from 'use-immer';
import {
  IBookSearchData,
  IBookSearchController,
  IBookData,
  IBookList,
} from 'store/types';
import { ISearchSummaryResponse } from 'store/api/apiTypes';
import { NUMBER_OF_LIST_ITEMS_PER_PAGE } from 'store/constants';
import apiGoogleBooks from 'store/api/apiGoogleBooks';

export const useBookSearchController = (): IBookSearchController => {
  const navigate = useNavigate();

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

  const setSelectedBook = (bookId?: string) => {
    setSearchData((draft: IBookSearchData) => {
      //setting the selected book id
      draft.selectedBookId = bookId;

      //getting the selected book by its id
      const { currentItems } = draft.searchResultData;
      //setting the selected book
      draft.selectedBook =
        currentItems && currentItems.find(book => book.id === bookId);

      //navigating to the book-details page
      navigate(`books/${bookId}`);
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
    ...searchData,
    setSearchTerm,
    setSelectedPage,
    setSelectedBook,
  };
};
