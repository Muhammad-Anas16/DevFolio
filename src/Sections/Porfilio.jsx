import { Box, Grid, Typography, Container, Button } from "@mui/material";
import projectImage from "../Images/project.png";
import ProjectCardSection from "../Component/ProjectCard";

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
        <Box
          sx={{ py: 6, bgcolor: "background.default", color: "text.primary" }}
        >
          <Container>
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={{ xs: "column-reverse", md: "row" }}
            >
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
          <ProjectCardSection />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            href="https://github.com/Muhammad-Anas16?tab=repositories"
            sx={{
              background: "#FF0055",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "0.75rem",
              textTransform: "none",
              px: 2,
              py: 1,
            }}
          >
            More Projects (Github)
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Project;
