import { styled } from '@mui/material/styles';
import { Box } from 'components/controls/Box';

export const StyledFooter = styled(Box)`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.layout.footer.background};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
