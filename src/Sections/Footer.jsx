import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#111",
        // color: "#fff",
        py: 3,
        textAlign: "center",
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