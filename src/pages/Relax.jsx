import React from "react";
import Hero from "../components/relax/Hero";
import Desc from "../components/relax/Desc";
import Gallery from "../components/relax/Gallery";
import Hooker from "../components/relax/Hooker";
import Menu from "../components/relax/Menu";

const Dine = () => {
  return (
    <div className="bg-slate-400 text-center pt-18 lg:pt-24">
      <Hero />
      <Desc />
      <Gallery />
      <Hooker />
      <Menu />
    </div>
  );
};

export default Dine;
