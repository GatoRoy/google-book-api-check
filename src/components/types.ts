import { ElementType, PropsWithChildren } from 'react';
import { Theme } from '@mui/material';
import { SxProps, SystemProps } from '@mui/system';

export interface BaseControlProps
  extends PropsWithChildren<SystemProps<Theme> & {}> {
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * see: https://mui.com/system/getting-started/the-sx-prop/
   */
  sx?: SxProps<Theme>;
}

export interface ClickableProps extends BaseControlProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}
