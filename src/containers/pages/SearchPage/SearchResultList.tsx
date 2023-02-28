import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookSearch } from 'store/hooks/UseBookSearch/Context';
import { IListItemData } from 'store/types';
import { List } from 'components/List';
import { Pagination } from 'components/controls/Pagination';

export const SearchResultList: FC = () => {
  const { setSelectedPage, searchResultData, setSelectedBookId } =
    useBookSearch();
  const navigate = useNavigate();

  //TODO:  move this method into useBookSearch
  const onBookClicked = (bookData: IListItemData) => {
    //setting the id of the specified book as the selected book id
    setSelectedBookId(bookData.id);

    //navigating to the book-details page
    navigate(`books/${bookData.id}`);
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
