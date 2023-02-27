import { PaletteMode } from '@mui/material';
import { ILayoutStyles } from './themeTypes';
import { StyleConstants } from '../StyleConstants';
import { ColorPalette } from './colors';

export const getLayoutStyles = (_mode: PaletteMode): ILayoutStyles => {
  return {
    header: {
      height: StyleConstants.HEADER_HEIGHT,
      background: ColorPalette.main,
      contrastText: ColorPalette.contrast,
      borderColor: ColorPalette.component2,
    },
    body: {
      background: ColorPalette.light,
    },
    footer: {
      background: ColorPalette.main,
    },
    textbox: {
      background: '#fff',
      borderColor: ColorPalette.component2,
      input: ColorPalette.component1,
    },
    paper: {
      background: '#fff',
    },
  };
};
