import React from "react";
import AppBar from "./AppBar";
import Box from "@mui/joy/Box";
import { ThemeProvider, createTheme } from "@mui/system";
import ControlBox from "./ControlBox";
import SpiralBox from "./SpiralBox";
import ChordTray from "./ChordTray";
import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#222",
      secondary: "#444",
    },
    action: {
      active: "#ff9180",
    },
    success: {
      dark: "#801100",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="page">
        <AppBar />
        <ControlBox />
        <ChordTray />
        <SpiralBox />
      </Box>
    </ThemeProvider>
  );
}

export default App;
