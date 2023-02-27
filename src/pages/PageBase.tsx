import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Typography } from 'components/controls/Typography';
import { StyledPageBase, StyledPageBaseBody, StyledPageRow } from './styled';

export interface PageBaseProps extends PropsWithChildren<{}> {
  className?: string;
  headline?: string;
}

export const PageBase: FC<PageBaseProps> = ({
  children,
  className,
  headline,
}): ReactElement => {
  return (
    <StyledPageBase className={className}>
      <StyledPageBaseBody className="page-content">
        {headline && <PageHeader headline={headline} />}
        {children}
      </StyledPageBaseBody>
    </StyledPageBase>
  );
};

interface PageHeaderProps {
  headline: string;
}

const PageHeader: FC<PageHeaderProps> = ({ headline }) => {
  return (
    <StyledPageRow>
      <Typography variant="h3">{headline}</Typography>
    </StyledPageRow>
  );
};
