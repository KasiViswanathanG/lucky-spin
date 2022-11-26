import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#146531",
    light: "#469e65",
    dark: "#063316",
    contrastText: "#FFFFFF",
  },
};

const theme = createTheme({
  palette,
});

export default theme;
