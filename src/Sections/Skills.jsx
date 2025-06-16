import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import skillImage from "../Images/skill.png";

const Skills = () => {
  const SkillIcons = [
    {
      img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/167_Html5_logo_logos-512.png",
      title: "HTML",
      shadow: "#E44D26",
    },
    {
      img: "https://cdn-icons-png.freepik.com/512/732/732190.png",
      title: "CSS",
      shadow: "#2196F3",
    },
    {
      img: "https://img.icons8.com/pulsar-gradient/512/javascript.png",
      title: "JAVASCRIPT",
      shadow: "#FAC505",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
      title: "REACT",
      shadow: "2196F3",
    },
    {
      img: "https://static-00.iconduck.com/assets.00/nodejs-icon-512x512-vl7ew1eg.png",
      title: "NODE.JS",
      shadow: "#439934",
    },
    {
      img: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png",
      title: "MONGO DB",
      shadow: "#439934",
    },
    {
      img: "https://initialcommit.com/img/initialcommit/babygit-logo.png",
      title: "GIT",
      shadow: "#E44D26",
    },
  ];

  const points = [
    "Building full-stack apps with MongoDB, Express, React, and Node.js",
    "Creating clean and responsive UIs with React",
    "RESTful API development using Express and Node",
    "Connecting frontend to backend with Axios & Fetch",
    "Database design & queries using MongoDB & Mongoose",
    "Deploying apps with Render, Vercel, or Netlify",
  ];

  return (
    <Box sx={{ py: 6, background: "#fff" }}>
      <Container maxWidth="lg">
        <Typography color="#FF0055" variant="h4" align="center" fontWeight="bold" gutterBottom>
          Here's what I do
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={skillImage}
              alt="Boy with Laptop"
              sx={{
                width: "100%",
                maxWidth: 400,
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            {/* <Typography variant="h6" fontWeight="bold" gutterBottom>
              MERN Stack Developer
            </Typography> */}

            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={2}
              mt={3}
              sx={{ pt: 1, pb: 5, gap: 2 }}
            >
              {SkillIcons.map((icon, i) => {
                return (
                  <Box key={i}
                    component="img"
                    src={icon?.img}
                    alt={icon?.title}
                    title={icon?.title}
                    sx={{
                      width: 40,
                      height: 40,
                      objectFit: "contain",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      borderRadius: "6px", // optional for smooth look
                      boxShadow: "0 0 0 transparent",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: `0 4px 12px ${
                          icon?.shadow || "rgba(0,0,0,0.3)"
                        }`,
                      },
                    }}
                  />
                );
              })}
            </Stack>

            {/* <List dense> */}
            {points.map((text, i) => (
              <ListItem key={i} disableGutters>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <FlashOnIcon fontSize="small" sx={{ color: "yellow" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            {/* </List> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
