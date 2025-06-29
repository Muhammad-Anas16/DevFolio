import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { useSelector } from "react-redux";

const cards = [
  {
    id: 1,
    title: "Proper React Web",
    description:
      "fully functional e-commerce web using React. Including Hooks, React Router, Redux Toolkit, TanStack Query, and React Hook Form. Pagination, and Firebase for backend.( Currently I'm Still working on it )",
    github: "https://github.com/Muhammad-Anas16/React-Proper-Web",
    live: "https://react-proper-web.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  },
  {
    id: 2,
    title: "Dev Folio",
    description:
      "my own portfolio using HTML, CSS, JavaScript, and React to showcase my projects, skills, and a bit about me. It’s clean, responsive, and easily reflect both my coding skills and personal style",
    github: "https://github.com/Muhammad-Anas16/DevFolio",
    live: "https://deveveloper-folio.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    title: "Express, MongoDB server",
    description:
      "Working on a backend project with Node.js, Express, and MongoDB. Still in progress, but I’m building out APIs, messing with databases, and figuring out how everything works behind the scenes",
    github: "https://github.com/Muhammad-Anas16/MongoDB",
    live: "#",
    tech: ["NodeJS", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "Digital Clock",
    description:
      "a simple digital clock with HTML, CSS, and JavaScript. Just a fun little project to play around with time and the DOM",
    github: "https://github.com/Muhammad-Anas16/The-Digital-Clock",
    live: "https://watch-and-check-time.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 5,
    title: "Forn-Local-Storage",
    description:
      "a basic form using HTML, CSS, and JavaScript that saves data, even after refreshing the page, just to learn how browser storage works",
    github: "https://github.com/Muhammad-Anas16/forn-Local-Storage",
    live: "https://form-validation-local-storage.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
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
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

function ProjectCardSection() {
  const theme = useSelector((state) => state.theme.mode);

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
            backgroundColor: theme === "dark" ? "#1e1e1e" : "#f9f9f9",
            color: theme === "dark" ? "#f1f1f1" : "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow:
              theme === "dark"
                ? "0 0 10px rgba(255,255,255,0.05)"
                : "0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {card.title}
            </Typography>

            <Typography
              variant="body2"
              color={theme === "dark" ? "#ccc" : "text.secondary"}
              sx={{ mb: 2, textTransform: "capitalize" }}
            >
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
                      color: theme === "dark" ? "#aaa" : "#555",
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
                color: theme === "dark" ? "#ccc" : "#181717",
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
