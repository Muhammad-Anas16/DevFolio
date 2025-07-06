import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
  Container,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  WhatsApp,
  Email,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import IntroImage from "../Images/boy.png";
import { useSelector } from "react-redux";

const Intro = ({ setScroll }) => {
  const HandleContactMe = () => {
    if (setScroll) {
      setScroll("Contact Me");
    }
  };

  const mode = useSelector((state) => state.theme.mode);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 7, lg: 10 },
        py: { xs: 6, md: 10 },
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
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
              <Box
                component="span"
                sx={{ color: "#e63946", fontWeight: "bold" }}
              >
                Mohammad Anas
              </Box>
              , a frontend develope{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
              <br />
              learning backend too...
            </Typography>

            <Stack direction="row" flexWrap="wrap" spacing={2} mt={3}>
              <IconButton
                href="https://github.com/muhammad-anas16"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: mode === "dark" ? "#ffffff" : "#171515",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <GitHub />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/muhammad-anas-b5368b32a"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#0A66C2",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <LinkedIn />
              </IconButton>

              <IconButton
                href="https://www.facebook.com/Muhammad.Anas.Dev"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1877F2",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                href="https://www.instagram.com/muhammad.anas.dev/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#E1306C",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                href="mailto:muhammad-anas16@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#EA4335",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Email />
              </IconButton>

              <IconButton
                href="https://wa.me/923182834203"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#25D366",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <WhatsApp />
              </IconButton>
            </Stack>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={HandleContactMe}
                sx={{
                  bgcolor: "#ff0055",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#e6004c" },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>

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
      </Container>
    </Box>
  );
};

export default Intro;
