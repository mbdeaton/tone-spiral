import React from "react";
import AppBar from "./AppBar";
import Container from "@mui/system/Container";
import SpiralCanvas from "./SpiralCanvas";
import "./App.css";

function App() {
  return (
    <>
      <AppBar />
      <Container className="page">
        <SpiralCanvas />
      </Container>
    </>
  );
}

export default App;
