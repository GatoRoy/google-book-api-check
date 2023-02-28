import { ajaxGet } from './ajaxRequest';
import { IBookResult, ISearchSummaryResponse } from './apiTypes';
import { mockQueryBookResponseData } from './mockQueryBookResponseData';

//see:  https://developers.google.com/books/docs/v1/using

const apiGoogleBooks = () => {
  const googleBookVolumeUrl = 'https://www.googleapis.com/books/v1/volumes';

  const searchBooks = (
    query: string,
    startIndex: number = 0,
  ): Promise<ISearchSummaryResponse> => {
    console.log('searchBooks -> query=', query, ',  startIndex=', startIndex);

    return new Promise<ISearchSummaryResponse>((resolve, reject) => {
      const queryUrl = `${googleBookVolumeUrl}?q=${query}&startIndex=${startIndex}`;

      console.log('searchBooks -> queryUrl=', queryUrl);

      ajaxGet(queryUrl)
        .then(response => {
          console.log('searchBooks -> response=', response);

          resolve(response);
        })
        .catch(err => {
          console.error('searchBooks -> error=', err);

          //overriding the error response till I will fix it:
          resolve(mockQueryBookResponseData);
        });
    });
  };

  const loadBookVolume = (bookId: string): Promise<IBookResult> => {
    console.log('loadBookVolume -> bookId=', bookId);

    return new Promise<IBookResult>((resolve, reject) => {
      const queryUrl = `${googleBookVolumeUrl}/${bookId}`;

      console.log('loadBookVolume -> queryUrl=', queryUrl);

      ajaxGet(queryUrl)
        .then(response => {
          console.log('loadBookVolume -> response=', response);

          resolve(response);
        })
        .catch(err => {
          console.error('loadBookVolume -> error=', err);
          reject(err);
        });
    });
  };

  return {
    searchBooks,
    loadBookVolume,
  };
};

export default apiGoogleBooks();
