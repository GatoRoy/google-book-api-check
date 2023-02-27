import { PaletteMode } from '@mui/material';
import { ColorPalette } from './colors';

export const getPaletteStyles = (_mode: PaletteMode) => {
  return {
    primary: {
      main: ColorPalette.main,
      light: ColorPalette.light,
      dark: ColorPalette.dark,
      contrastText: ColorPalette.contrast,
    },
    secondary: {
      main: ColorPalette.component1,
      light: ColorPalette.alter1,
      dark: ColorPalette.alter2,
      contrastText: ColorPalette.contrast,
    },
  };
};
