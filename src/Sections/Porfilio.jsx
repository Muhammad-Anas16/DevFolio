import { Box, Grid, Typography, Container } from "@mui/material";
import projectImage from "../Images/project.png";

const Project = () => {
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
          Projects
        </Typography>
        <Box sx={{ py: 6, bgcolor: 'background.default', color: 'text.primary' }}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ px: { xs: 2, md: 4 } }}>
                  <Typography variant="h6">
                    My best experience is to create NodeJS <br /> Backend
                    Projects and React Project.
                    <br /> Below are some of my projects.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={projectImage}
                  alt="Projects"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    display: "block",
                    mx: { xs: "auto", md: 0 },
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Project;
