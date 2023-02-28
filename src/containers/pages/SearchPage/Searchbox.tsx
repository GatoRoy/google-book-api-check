import React, { FC } from 'react';
import { useBookSearch } from 'store/hooks/UseBookSearch/Context';
import { Textbox } from 'components/controls/Textbox';

export const Searchbox: FC = () => {
  const { setSearchTerm } = useBookSearch();

  return (
    <Textbox
      className="searchbox-input"
      onChange={setSearchTerm}
      placeholder="Search"
    />
  );
};
