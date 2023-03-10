import React from "react";
import Box from "@mui/joy/Box";
import logo from "./logo-lighter.svg";
import "./AppBar.css";

function AppBar() {
  return (
    <Box id="app-bar">
      <img className="logo" src={logo} alt="a hand-drawn spiral" />
      <h2 className="app-name">Tone Spiral</h2>

      <svg role="img" viewBox="0 0 24 24" title="get help">
        <path d="M12,4C7.58,4,4,7.58,4,12s3.58,8,8,8,8-3.58,8-8S16.42,4,12,4Zm-1,3h2v2h-2v-2Zm3,10h-4v-1h1v-4h-1v-1h3v5h1v1Z"></path>
      </svg>
    </Box>
  );
}

export default AppBar;
