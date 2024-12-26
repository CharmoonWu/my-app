"use client";

import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

let theme = createTheme({
  palette: {
    mode: "dark",
  },
  status: {
    danger: orange[500],
  },

  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
