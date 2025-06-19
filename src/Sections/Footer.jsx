import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="body1">
        Made by{" "}
        <Box component="span" sx={{ color: "#FF0055", fontWeight: "bold" }}>
          Mohammad Anas
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
