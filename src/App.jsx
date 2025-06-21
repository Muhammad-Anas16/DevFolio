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
      <CssBaseline>
        <Box
          sx={{
            overflowX: "hidden",
            textAlign: "center",
            bgcolor: "black",
            color: "text.primary",
          }}
        >
          <Navbar setScroll={setScroll} /> {/* Navbar Component */}
          <Box id="Home">
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
          <Footer /> {/* Footer Component */}
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
