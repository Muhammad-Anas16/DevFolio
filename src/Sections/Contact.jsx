import {
  Box,
  Grid,
  Typography,
  Container,
  Avatar,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  WhatsApp,
  Email,
  Facebook,
  Instagram,
} from "@mui/icons-material";

import My_Image from "../Images/pic.png";
import { useSelector } from "react-redux";

const Contact = () => {
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
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          color="#FF0055"
        >
          Contact Me
        </Typography>
        <Box
          sx={{ py: 6, bgcolor: "background.default", color: "text.primary" }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="My Image"
                  src={My_Image}
                  sx={{
                    width: 300, // You can adjust this
                    height: 300,
                    mx: { xs: "auto", md: 0 },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  You can contact me at the places mentioned below. I will try
                  <br />
                  to get back to you as fast as I can.
                </Typography>

                {/* Social Icons */}
                <Stack direction="row" spacing={2} mt={3}>
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

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 4,
                      bgcolor: "#ff0055",
                      fontWeight: "bold",
                      "&:hover": { bgcolor: "#e6004c" },
                    }}
                  >
                    See My Resume
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
