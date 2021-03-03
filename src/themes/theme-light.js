import { createMuiTheme } from "@material-ui/core/styles"

const themeLight = createMuiTheme({
  palette: {
    primary: {
      light: "#ff6090",
      main: "#e91e63",
      dark: "#b0003a",
      contrastText: "#000000",
    },
    secondary: {
      light: "#f48fb1",
      main: "#ffc1e3",
      dark: "#bf5f82",
      contrastText: "#000",
    },
  },
})

export default themeLight
