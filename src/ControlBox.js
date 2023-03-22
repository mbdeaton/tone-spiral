import React from "react";
import Box from "@mui/joy/Box";
import PlayButton from "./PlayButton";
import "./ControlBox.css";

function ControlBox() {
  return (
    <Box className="control-box" sx={{ display: "flex", gap: 4 }}>
      control box
      <PlayButton />
    </Box>
  );
}

export default ControlBox;
