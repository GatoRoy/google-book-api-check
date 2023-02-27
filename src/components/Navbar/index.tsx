import React, { FC, ReactElement } from 'react';
import { Container, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useBookSearch } from 'store/Context';
import { Box } from 'components/controls/Box';
import { Typography } from 'components/controls/Typography';
import { AppLink } from 'components/controls/Link';
import { NavMenu } from './NavMenu';
import { StyledNavbar, StyledWideNavbarBox } from './styled';

const Navbar: FC = (): ReactElement => {
  return (
    <StyledNavbar className="navigation-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WideNavbar />
          <NarrowNavbar />
        </Toolbar>
      </Container>
    </StyledNavbar>
  );
};

const WideNavbar: FC = () => {
  const { pageRoutes } = useBookSearch();

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
          {pageRoutes.map(page => (
            <AppLink key={page.key} path={page.path}>
              {page.title}
            </AppLink>
          ))}
        </StyledWideNavbarBox>
      </Box>
    </>
  );
};

const NarrowNavbar: FC = () => {
  return (
    <>
      <NavMenu>
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
