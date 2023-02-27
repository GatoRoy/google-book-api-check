import React, { FC, ReactElement } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { StyledFooter } from './styled';

export const Footer: FC = (): ReactElement => {
  return (
    <StyledFooter className="footer">
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Google Search Books App</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
