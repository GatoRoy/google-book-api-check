import React, { FC } from 'react';
import { PageBase, PageBaseProps } from 'pages/PageBase';
import { StyledPageRow } from 'pages/styled';
import { Searchbox } from './Searchbox';
import { SearchResultList } from './SearchResultList';
import { StyledSearchResultListWrapper } from './styled';

interface SearchPageProps extends PageBaseProps {}

const SearchPage: FC<SearchPageProps> = props => {
  return (
    <PageBase {...props} className="search-page" headline="Search Books">
      <StyledPageRow>
        <Searchbox />
      </StyledPageRow>
      <StyledSearchResultListWrapper>
        <SearchResultList />
      </StyledSearchResultListWrapper>
    </PageBase>
  );
};

export default SearchPage;
