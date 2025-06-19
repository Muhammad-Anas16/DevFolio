import { useState } from "react";
import "./App.css";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Intro from "./Sections/Intro";
import Skills from "./Sections/Skills";
import Project from "./Sections/Porfilio";
import Contact from "./Sections/Conract";
import Footer from "./Sections/Footer";
import Navbar from "./Sections/Navbar";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  // console.log("Theme mode right now " + mode);

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

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
          <Navbar />
          <Intro />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
