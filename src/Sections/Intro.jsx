import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Instagram, Google } from "@mui/icons-material";
import IntroImage from "../Images/boy.png";

const Intro = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 7, lg: 10 }, // Responsive padding
        py: { xs: 6, md: 10 },
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            Hello{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            .
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}
          >
            I'm{" "}
            <Box component="span" sx={{ color: "#e63946", fontWeight: "bold" }}>
              Mohammad Anas
            </Box>
            , a frontend develope{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
            <br />
            learning backend too...
            {/* . Always learning. */}
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" flexWrap="wrap" spacing={2} mt={3}>
            <IconButton color="inherit">
              <GitHub />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit">
              <Google />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Stack>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#ff0055",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#e6004c" },
            }}
          >
            Contact Me
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={IntroImage}
            alt="Boy with Laptop"
            sx={{
              width: "100%",
              maxWidth: 350,
              mx: "auto",
              display: "block",
              height: { xs: 250, sm: 300, md: 400 },
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
