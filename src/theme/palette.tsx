import { colors } from "@mui/material";
import { grey } from "@mui/material/colors";

const white = "#FFFFFF";
const black = grey[800];

export default {
  primary: {
    dark: "#7BDB5A",
    main: "#7BDB5A",
    light: "#2FC56D",
  },
  secondary: {
    main: "#19143A",
    light: "#2E3F88",
    dark: "#19143A",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[100],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: "#9759C4",
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[100],
  },
  common: {
    black,
    white,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[100],
  },
  background: {
    default: "#FFFFFF",
    paper: "#F2F3F7",
    dark: "#22275B",
  },
  text: {
    primary: black,
    secondary: "#22275B",
    disabled: "#9399C2",
  },
  action: {
    active: "#000",
  },
};
