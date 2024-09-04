import React from "react";
import Hero from "../components/stay/Hero";
import Villas from "../components/stay/Villas";
import Display from "../components/stay/Display";

const Stay = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Hero />
      <Villas />
      <Display />
    </div>
  );
};

export default Stay;
