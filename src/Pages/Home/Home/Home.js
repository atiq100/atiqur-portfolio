import React from "react";
import About from "../../About/About";

import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";

import { Hero } from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
