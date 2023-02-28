import React, { FC } from 'react';
import { MenuItem as MuiMenuItem } from '@mui/material';
import { NavProps } from 'components/types';
import { Box } from 'components/controls/Box';
import { IconButton } from 'components/controls/buttons/IconButton';
import { AppLink } from 'components/controls/Link';
import { Typography } from 'components/controls/Typography';
import { StyledNavMenuPopover } from './styled';

interface NavMenuProps extends NavProps {}

export const NavMenu: FC<NavMenuProps> = props => {
  const { children, routes } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpenMenu}
      >
        {children}
      </IconButton>
      <StyledNavMenuPopover
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
      >
        {routes.map(
          page =>
            page.inHeader && (
              <AppLink key={page.key} path={page.path}>
                <MuiMenuItem onClick={onCloseMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MuiMenuItem>
              </AppLink>
            ),
        )}
      </StyledNavMenuPopover>
    </Box>
  );
};
