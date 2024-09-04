import React from "react";
import Hero from "../components/dine/Hero";
import Desc from "../components/dine/Desc";
import Gallery from "../components/dine/Gallery";
import Hooker from "../components/dine/Hooker";
import Menu from "../components/dine/Menu";

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
