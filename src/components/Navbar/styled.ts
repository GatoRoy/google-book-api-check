import { Menu as MuiMenu, popoverClasses, styled } from '@mui/material';
import { Box } from 'components/controls/Box';

export const StyledNavbar = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledWideNavbarBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
`;

export const StyledNavMenuPopover = styled(MuiMenu)`
  display: { xs: 'block', md: 'none' };
  & .${popoverClasses.paper} {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
