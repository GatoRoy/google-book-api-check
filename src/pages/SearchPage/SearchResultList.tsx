import React, { FC } from 'react';
import { useBookSearch } from 'store/Context';
import { IListItemData } from 'store/types';
import { List } from 'components/List';
import { Pagination } from 'components/controls/Pagination';
import { useNavigate } from 'react-router-dom';

export const SearchResultList: FC = () => {
  const { setSelectedPage, searchResultData, setSelectedBookId } =
    useBookSearch();
  const navigate = useNavigate();

  const onBookClicked = (bookData: IListItemData) => {
    //setting the id of the specified book as the selected book id
    setSelectedBookId(bookData.id);

    //navigating to the book-details page
    navigate('/book');
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
