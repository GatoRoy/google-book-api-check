import React, { FC, ReactElement } from 'react';
import { Container, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavProps } from 'components/types';
import { Box } from 'components/controls/Box';
import { Typography } from 'components/controls/Typography';
import { AppLink } from 'components/controls/Link';
import { NavMenu } from './NavMenu';
import { StyledNavbar, StyledWideNavbarBox } from './styled';

interface NavbarProps extends NavProps {}

const Navbar: FC<NavbarProps> = (props): ReactElement => {
  return (
    <StyledNavbar className="navigation-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WideNavbar {...props} />
          <NarrowNavbar {...props} />
        </Toolbar>
      </Container>
    </StyledNavbar>
  );
};

const WideNavbar: FC<NavbarProps> = ({ routes }) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
      >
        Google Books
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
        <StyledWideNavbarBox>
          {routes.map(
            page =>
              page.inHeader && (
                <AppLink key={page.key} path={page.path}>
                  {page.title}
                </AppLink>
              ),
          )}
        </StyledWideNavbarBox>
      </Box>
    </>
  );
};

const NarrowNavbar: FC<NavbarProps> = ({ routes }) => {
  return (
    <>
      <NavMenu routes={routes}>
        <MenuIcon />
      </NavMenu>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
        }}
      >
        Google Books App
      </Typography>
    </>
  );
};

export default Navbar;
