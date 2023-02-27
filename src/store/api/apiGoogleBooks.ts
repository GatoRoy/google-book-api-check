import { ajaxGet } from './ajaxRequest';
import { mockQueryBookResponseData } from './mockQueryBookResponseData';

//see:  https://developers.google.com/books/docs/v1/using

const apiGoogleBooks = () => {
  const googleUrl = 'https://www.googleapis.com/books/v1/volumes';

  const searchBooks = (query: string, startIndex: number = 0): Promise<any> => {
    console.log('searchBooks -> query=', query, ',  startIndex=', startIndex);

    return new Promise<any>((resolve, reject) => {
      const queryUrl = `${googleUrl}?q=${query}&startIndex=${startIndex}`;

      console.log('searchBooks -> queryUrl=', queryUrl);

      ajaxGet(queryUrl)
        .then(response => {
          console.log('searchBooks -> response=', response);

          resolve(response);
        })
        .catch(err => {
          console.error(err);

          //overriding the error response till I will fix it:
          resolve(mockQueryBookResponseData);
        });
    });
  };

  return {
    searchBooks,
  };
};

export default apiGoogleBooks();
