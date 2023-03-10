import React, { FC } from 'react';
import { IBookData } from 'store/types';
import { useBookSearch } from 'store/hooks/UseBookSearch/Context';
import { PageBase, PageBaseProps } from 'containers/pages/PageBase';
import { Typography } from 'components/controls/Typography';
import { Box } from 'components/controls/Box';

interface BookDetailsPageProps extends PageBaseProps {}

const BookDetailsPage: FC<BookDetailsPageProps> = props => {
  const { selectedBook } = useBookSearch();

  const pageHeadline = selectedBook
    ? `Book: ${selectedBook.title}`
    : 'No book was selected';

  return (
    <PageBase {...props} className="book-details-page" headline={pageHeadline}>
      {selectedBook && <BookDetailsContent data={selectedBook} />}
    </PageBase>
  );
};

interface BookDetailsContentProps {
  data: IBookData;
}

const BookDetailsContent: FC<BookDetailsContentProps> = props => {
  const { data } = props;
  const { imageName, description, extendedData } = data;

  const authorString: string = extendedData.volumeInfo.authors.join(', ');

  return (
    <Box>
      <Box p="0.5rem 1rem">
        <Typography variant="h6">Authors: {authorString}</Typography>
      </Box>
      <Box p="0.5rem 1rem">
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Box p="0.5rem 1rem">
        <img
          alt={imageName}
          src={extendedData.volumeInfo.imageLinks.thumbnail}
        />
      </Box>
    </Box>
  );
};

export default BookDetailsPage;
