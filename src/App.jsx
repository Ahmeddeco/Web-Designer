import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contributors from "./components/Contributors";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
    </>
  );
};

export default App;
