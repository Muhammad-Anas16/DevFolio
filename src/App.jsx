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
import PulseLoader from "./Component/PulseLoader";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images properly instead of using require()
import boy from "./Images/boy.png";
import pic from "./Images/pic.png";
import project from "./Images/project.png";
import skill from "./Images/skill.png";

// Utility to preload images
function preloadImages(srcArray) {
  return Promise.all(
    srcArray.map(
      (src) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.onload = img.onerror = resolve;
          img.src = src;
        })
    )
  );
}

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const [scroll, setScroll] = useState(null);
  const [loading, setLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // ✅ Use imported images here
  const criticalImages = [boy, pic, project, skill];

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    // Minimum loader time
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1200); // 1.2s minimum loader time (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Preload images
    preloadImages(criticalImages).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (minTimePassed && imagesLoaded) {
      setLoading(false);
    }
  }, [minTimePassed, imagesLoaded]);

  useEffect(() => {
    if (!loading) {
      const getID = document.getElementById(scroll);
      if (getID) {
        getID.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scroll, loading]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                height: "99vh",
                width: "99vw",
                marginX: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: mode === "dark" ? "#121212" : "#ffffff",
                overflow: "hidden",
              }}
            >
              <PulseLoader color={mode === "dark" ? "#ffffff" : "#121212"} />
            </Box>
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
