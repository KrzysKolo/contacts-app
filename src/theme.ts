
import { extendTheme } from "@chakra-ui/react";


const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#076bce",
      200: "#065cad",
    },
    secondary: {
      100: "#f9ab00",
      600 : '#e09c08' ,
    },
    alertColor: "#cb2e25",
    cardColor: "#6faf1f",
    darkColor: "#21243D",
    lightColor: "#8695A4",
    whiteColor: " #FFFFFF",
    backgroundColor: "#E5E5E5",
    backgroundColor2: "#EDF7FA",
    tagColor: "#142850",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Orbitron, sans-seri",
    mono: "Menlo, monospace",
    button: "'Geo', sans-serif",
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
})
export default customTheme;