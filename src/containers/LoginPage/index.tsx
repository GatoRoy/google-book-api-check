import React, { FC } from 'react';
import { useApp } from 'store/hooks/UseApp/Context';
import { Box } from 'components/controls/Box';
import { Typography } from 'components/controls/Typography';
import { Button } from 'components/controls/buttons/Button';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = props => {
  const { setIfLoggedIn } = useApp();

  const onLogin = () => {
    setIfLoggedIn(true);
  };

  return (
    <Box>
      <Typography variant="h4">Login page</Typography>
      <Button onClick={onLogin}>Click to login</Button>
    </Box>
  );
};

export default LoginPage;
