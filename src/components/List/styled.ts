import { styled } from '@mui/material/styles';
import { List as MuiList, ListItem as MuiListItem } from '@mui/material';
import { Box } from 'components/controls/Box';

export const StyledList = styled(MuiList)`
  position: relative;
  width: 100%;
  min-height: 20rem;
  background-color: ${({ theme }) => theme.layout.paper.background};
`;

export const StyledEmptyList = styled(StyledList)`
  padding: 0.5rem 1rem;
`;

export const StyledListItem = styled(MuiListItem)`
  align-items: flex-start;
`;

export const StyledListItemImageWrapper = styled(Box)`
  padding-right: 0.5rem;
`;
