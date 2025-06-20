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

const Contact = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="lg">
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
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Avatar
                  alt="Projects"
                  src="https://static.vecteezy.com/system/resources/thumbnails/053/760/383/small/blue-3d-person-icon-isolated-on-transparent-background-png.png"
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
                alignItems="center"
                justifyContent="center"
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
                <Stack direction="row" flexWrap="wrap" spacing={2} mt={3}>
                  <IconButton
                    href="https://github.com/muhammad-anas16"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#171515", // GitHub
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <GitHub />
                  </IconButton>

                  <IconButton
                    href="https://www.linkedin.com/in/muhammad-anas-b5368b32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#0A66C2", // LinkedIn
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>

                  <IconButton
                    href="https://www.facebook.com/Muhammad.Anas.Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#1877F2", // Facebook blue
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Facebook />
                  </IconButton>

                  <IconButton
                    href="https://www.instagram.com/muhammad.anas.dev/?igsh=MTBkanNza2IwczFkZA%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#E1306C", // Instagram
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Instagram />
                  </IconButton>

                  <IconButton
                    href="mailto:muhammad-anas16@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#EA4335", // Email/Gmail red
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Email />
                  </IconButton>

                  <IconButton
                    href="https://wa.me/923182834203"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#25D366", // WhatsApp green
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <WhatsApp />
                  </IconButton>
                </Stack>

                {/* Button */}
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
