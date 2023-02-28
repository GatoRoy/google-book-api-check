import React, { FC } from 'react';
import { useBookSearch } from 'store/hooks/UseBookSearch/Context';
import { IListItemData } from 'store/types';
import { List } from 'components/List';
import { Pagination } from 'components/controls/Pagination';

export const SearchResultList: FC = () => {
  const { setSelectedPage, searchResultData, setSelectedBook } =
    useBookSearch();

  const onBookClicked = (bookData: IListItemData) => {
    setSelectedBook(bookData.id);
  };

  return (
    <>
      <List
        className="search-results"
        items={searchResultData.currentItems}
        onItemClicked={onBookClicked}
        emptyListMessage="No results"
      />
      {searchResultData.pageCount ? (
        <Pagination
          count={searchResultData.pageCount}
          onPageChanged={setSelectedPage}
        />
      ) : null}
    </>
  );
};
