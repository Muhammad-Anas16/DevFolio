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

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const [scroll, setScroll] = useState(null);
  const [loading, setLoading] = useState(true);

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust duration for loader delay
    return () => clearTimeout(timer);
  }, []);

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
