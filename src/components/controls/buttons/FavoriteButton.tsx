import React from 'react';
import {
  Favorite as MuiFavoriteIcon,
  FavoriteBorder as MuiFavoriteBorderIcon,
} from '@mui/icons-material';
import { Button } from 'components/controls/buttons/Button';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: (isFavorite: boolean) => void;
}

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { isFavorite, onClick } = props;

  const onButtonClicked = () => {
    onClick(isFavorite);
  };

  return (
    <Button component="span" color="text.primary" onClick={onButtonClicked}>
      {isFavorite ? <MuiFavoriteIcon /> : <MuiFavoriteBorderIcon />}
    </Button>
  );
};
