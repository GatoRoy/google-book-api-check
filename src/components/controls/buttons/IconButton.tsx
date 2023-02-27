import React, { FC } from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { ClickableProps } from 'components/types';

interface IconButtonProps extends ClickableProps {}

export const IconButton: FC<IconButtonProps> = props => {
  const { children, onClick } = props;
  return (
    <MuiIconButton {...props} size="large" color="inherit" onClick={onClick}>
      {children}
    </MuiIconButton>
  );
};
