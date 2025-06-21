import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const cards = [
  {
    id: 1,
    title: "Proper React Web",
    description:
      "A professional React website with responsive design and routing.",
    github: "https://github.com/Muhammad-Anas16/React-Proper-Web",
    live: "https://react-proper-web.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Animals App",
    description: "An app that showcases different animal species using an API.",
    github: "https://github.com/yourusername/animals-app",
    live: "https://animals-app-live.com",
    tech: ["HTML", "CSS", "React"],
  },
  {
    id: 3,
    title: "Humans App",
    description: "Displays human biology-related content fetched from backend.",
    github: "https://github.com/yourusername/humans-app",
    live: "https://humans-app-live.com",
    tech: ["NodeJS", "Express", "MongoDB"],
  },
];

const techIcons = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
};

function ProjectCardSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        },
        gap: 2,
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        px: 2,
        pt: 10,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            height: "100%",
            borderRadius: "10px",
            p: 3,
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {card.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {card.tech.map((tech, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover .tech-label": {
                      opacity: 1,
                      transform: "translateY(0px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={techIcons[tech]}
                    alt={tech}
                    sx={{ width: 30, height: 30 }}
                  />
                  <Typography
                    className="tech-label"
                    sx={{
                      position: "absolute",
                      top: "100%",
                      fontSize: 10,
                      opacity: 0,
                      mt: 0.5,
                      color: "#555",
                      transition: "all 0.2s ease",
                      transform: "translateY(5px)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tech}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
            <Box
              component="a"
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#181717",
                textDecoration: "none",
                "&:hover svg": {
                  filter: "drop-shadow(0 0 6px gray)",
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box
              component="a"
              href={card.live}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#4285F4",
                textDecoration: "none",
                "&:hover svg": {
                  filter: "drop-shadow(0 0 6px gray)",
                },
              }}
            >
              <LanguageIcon sx={{ fontSize: 30 }} />
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default ProjectCardSection;
