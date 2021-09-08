import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { amber, orange } from "@material-ui/core/colors";
const theme = createTheme({
  palette: {
    primary: { main: orange[600] },
    secondary: amber,
  },
  typography: { fontFamily: ["Nunito", "Montserrat"].join(",") },
});

export default theme;
