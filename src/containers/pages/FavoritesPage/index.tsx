import React, { FC } from 'react';
import { PageBase, PageBaseProps } from '../PageBase';
import { Typography } from 'components/controls/Typography';

interface FavoritesPageProps extends PageBaseProps {}

const FavoritesPage: FC<FavoritesPageProps> = props => {
  return (
    <PageBase {...props} headline="Favourites">
      <Typography variant="h5">Favourites page content</Typography>
    </PageBase>
  );
};

export default FavoritesPage;
