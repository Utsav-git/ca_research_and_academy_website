import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0090FF",
    },
    secondary: {
      main: "#FFD600",
    },
    background: {
      default: "#F5F8FA",
    },
    text: {
      primary: "#223142",
      secondary: "#7A869A",
    },
    action: {
      selected: "#E0F7FA", // Light cyan background for selected
      hover: "#F1F1F1", // Light grey for hover on non-selected
    },
  },
});

export default theme;
