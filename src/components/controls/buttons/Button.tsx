import React, { FC } from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import { ClickableProps } from 'components/types';

interface ButtonProps extends ClickableProps {}

export const Button: FC<ButtonProps> = props => {
  const { children, onClick } = props;
  return (
    <StyledButton {...props} size="large" color="inherit" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)`
  text-transform: none;
`;
