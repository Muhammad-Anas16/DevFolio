import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Intro from "./Sections/Intro";
import Skills from "./Sections/Skills";
import Project from "./Sections/Porfilio";
import Contact from "./Sections/Conract";
import Footer from "./Sections/Footer";
import Navbar from "./Sections/Navbar";

function App() {

  return (
    <Box sx={{ overflowX: "hidden", textAlign: "center" }}>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
