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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png",
    github: "https://github.com/Muhammad-Anas16/React-Proper-Web",
    live: "https://react-proper-web.netlify.app/",
  },
  {
    id: 2,
    title: "Animals App",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png",
    github: "https://github.com/yourusername/animals-app",
    live: "https://animals-app-live.com",
  },
  {
    id: 3,
    title: "Humans App",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png",
    github: "https://github.com/yourusername/humans-app",
    live: "https://humans-app-live.com",
  },
];

function ProjectCardSection() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", // Stack on small screens
          sm: "1fr 1fr", // Two columns on small/medium
          md: "1fr 1fr 1fr", // Three columns on medium and up
        },
        gap: 2,
        width: "100%",
        maxWidth: 1200,
        mx: "auto", // Center the whole grid horizontally
        px: 2,
        pt: 10,
      }}
    >
      {cards.map((card, index) => (
        // <Card key={index} sx={{ height: "100%" }}>
        <Card
          key={index}
          sx={{ position: "relative", height: 250, borderRadius: "10px" }}
        >
          {/* Project Image */}
          <Box
            component="img"
            src={card.image}
            alt={card.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Hover Content */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {card.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
              {/* GitHub Icon with color, label, and shadow on hover */}
              <Box
                component="a"
                href={card.github}
                target="_blank"
                sx={{
                  color: "#181717",
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover .label": { opacity: 1 },
                  "&:hover svg": {
                    filter: "drop-shadow(0 0 6px white)",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 30 }} />
                <Typography
                  className="label"
                  sx={{
                    fontSize: 12,
                    opacity: 0,
                    transition: "opacity 0.3s",
                    color: "#ffffff",
                  }}
                >
                  GitHub
                </Typography>
              </Box>
              <Box
                component="a"
                href={card.live}
                target="_blank"
                sx={{
                  color: "#4285F4",
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover .label": { opacity: 1 },
                  "&:hover svg": {
                    filter: "drop-shadow(0 0 6px white)",
                  },
                }}
              >
                <LanguageIcon sx={{ fontSize: 30 }} />
                <Typography
                  className="label"
                  sx={{
                    fontSize: 12,
                    opacity: 0,
                    transition: "opacity 0.3s",
                    color: "#ffffff",
                  }}
                >
                  Live
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default ProjectCardSection;
