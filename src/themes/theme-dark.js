import { createMuiTheme } from "@material-ui/core/styles"

const themeDark = createMuiTheme({
  palette: {
    primary: {
      light: "#ffeeff",
      main: "#ffeeff",
      dark: "#c48b9f",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ffffff",
      main: "#fce4ec",
      dark: "#c9b2ba",
      contrastText: "#000",
    },
  },
})

export default themeDark
