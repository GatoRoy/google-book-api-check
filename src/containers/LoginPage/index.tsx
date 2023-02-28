import React, { FC } from 'react';
import { useApp } from 'store/hooks/UseApp/Context';
import { Box } from 'components/controls/Box';
import { Typography } from 'components/controls/Typography';
import { Button } from 'components/controls/buttons/Button';
import { Textbox } from 'components/controls/Textbox';
import { StyledLoginPageRow } from './styled';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = props => {
  const { setIfLoggedIn } = useApp();

  const onLogin = () => {
    setIfLoggedIn(true);
  };

  const handleNothing = () => {};

  return (
    <Box>
      <StyledLoginPageRow>
        <Typography variant="h4">Login page</Typography>
      </StyledLoginPageRow>
      <StyledLoginPageRow>
        <Textbox
          className="username-input"
          onChange={handleNothing}
          placeholder="User name"
        />
      </StyledLoginPageRow>
      <StyledLoginPageRow>
        <Textbox
          className="password-input"
          onChange={handleNothing}
          placeholder="Password"
        />
      </StyledLoginPageRow>
      <StyledLoginPageRow>
        <Button onClick={onLogin}>Login</Button>
      </StyledLoginPageRow>
    </Box>
  );
};

export default LoginPage;
