import React from "react";
import AppBar from "./AppBar";
import Box from "@mui/joy/Box";
import ControlBox from "./ControlBox";
import SpiralBox from "./SpiralBox";
import ChordTray from "./ChordTray";
import { CssVarsProvider } from "@mui/joy/styles";
import "./App.css";

function App() {
  return (
    <CssVarsProvider>
      <Box id="page">
        <AppBar />
        <ControlBox />
        <ChordTray />
        <SpiralBox />
      </Box>
    </CssVarsProvider>
  );
}

export default App;
