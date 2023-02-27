import React, { FC, useState } from 'react';
import { Pagination as MuiPagination, Stack, styled } from '@mui/material';
import { BaseControlProps } from '../types';

interface PaginationProps extends BaseControlProps {
  onPageChanged: (newPageNumber: number) => void;
  count?: number;
}

export const Pagination: FC<PaginationProps> = ({
  onPageChanged,
  count = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChanged = (
    event: React.ChangeEvent<unknown>,
    newPageNumber: number,
  ) => {
    setCurrentPage(newPageNumber);
    onPageChanged(newPageNumber);
  };

  return (
    <StyledPaginationStack spacing={2}>
      <MuiPagination
        count={count}
        page={currentPage}
        onChange={handlePageChanged}
        shape="rounded"
      />
    </StyledPaginationStack>
  );
};

const StyledPaginationStack = styled(Stack)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;
