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
import { GitHub, LinkedIn, Instagram, Google } from "@mui/icons-material";
import projectImage from "../Images/project.png";

const Contact = () => {
  return (
    <Box sx={{ py: 6, background: "#fff" }}>
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
        <Box sx={{ py: 6, backgroundColor: "#fff" }}>
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
