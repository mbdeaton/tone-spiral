import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

import "./ControlBox.css";

function ControlBox() {
  return (
    <Box className="control-box" sx={{ display: "flex", gap: 4 }}>
      control box
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <RadioGroup>
          {["equal", "just", "free"].map((item) => (
            <Radio
              key={item}
              value={item}
              disableIcon
              label={item}
              variant="soft"
              color="neutral"
              sx={{
                px: 2,
                alignItems: "center",
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: {
                    ...(checked && {
                      bgcolor: "background.surface",
                      boxShadow: "md",
                      "&:hover": {
                        bgcolor: "background.surface",
                      },
                    }),
                  },
                }),
              }}
            />
          ))}
        </RadioGroup>
      </Box>
      <Button variant="soft" color="primary">
        play
      </Button>
      <Button variant="soft" color="neutral">
        names
      </Button>
    </Box>
  );
}

export default ControlBox;
