import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { BaseControlProps } from 'components/types';

interface LinkProps extends BaseControlProps {
  path: string;
}

export const AppLink: FC<LinkProps> = props => {
  const { children, path } = props;

  return (
    <MuiLink
      component={NavLink}
      to={path}
      color="primary.contrastText"
      underline="hover"
      variant="button"
      sx={{ fontSize: 'large', marginLeft: '2rem', textTransform: 'none' }}
    >
      {children}
    </MuiLink>
  );
};
