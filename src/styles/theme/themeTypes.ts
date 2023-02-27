declare module '@mui/material/styles' {
  interface Theme {
    layout: ILayoutStyles;
  }

  interface ThemeOptions {
    layout?: ILayoutStyles;
  }
}

export interface ILayoutStyles {
  header: {
    height: string;
    background: string;
    contrastText?: string;
    borderColor?: string;
  };
  body: {
    background: string;
  };
  footer: {
    background: string;
  };
  textbox: {
    background: string;
    borderColor: string;
    input: string;
  };
  paper: {
    background: string;
  };
}
