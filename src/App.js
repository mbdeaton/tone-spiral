import React from "react";
import AppBar from "./AppBar";
import Container from "@mui/system/Container";
import "./App.css";

function App() {
  return (
    <>
      <AppBar />
      <Container className="page"></Container>
    </>
  );
}

export default App;
