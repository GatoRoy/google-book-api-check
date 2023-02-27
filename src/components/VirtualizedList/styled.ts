import { styled } from '@mui/material/styles';
import { Box } from 'components/controls/Box';

export const StyledVirtualizedList = styled(Box)`
  width: '100%';
  height: 400px;
  max-width: 360px;
  background-color: ${({ theme }) => theme.layout.paper.background};
`;
