import { useEffect, useState } from "react";
import "./App.css";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Intro from "./Sections/Intro";
import Skills from "./Sections/Skills";
import Project from "./Sections/Porfilio";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Navbar from "./Component/Navbar";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const [scroll, setScroll] = useState(null);

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    const getID = document.getElementById(scroll);
    if (getID) {
      getID.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {/* 🧱 Main Content */}
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflowY: "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          color: "text.primary",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Navbar setScroll={setScroll} />

        <Box
          id="Home"
          sx={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        >
          <Intro setScroll={setScroll} />
        </Box>

        <Box id="Skills">
          <Skills />
        </Box>

        <Box id="Projects">
          <Project />
        </Box>

        <Box id="Contact Me">
          <Contact />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
