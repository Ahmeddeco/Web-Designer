import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contributors from "./components/Contributors";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
      <Portfolio/>
    </>
  );
};

export default App;
