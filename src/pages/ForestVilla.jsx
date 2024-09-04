import React from "react";
import { Link } from "react-router-dom";
import FHero from "../components/stay/F-Hero";
import FHooker from "../components/stay/F-Hooker";
import FGallery from "../components/stay/F-Gallery";
import FText from "../components/stay/F-Text";
import FFacilities from "../components/stay/F-Facilities";

const ForestVilla = () => {
  return (
    <div className="h-auto text-center pt-20 md:pt-24">
      <FHero />
      <FHooker />
      <FGallery />
      <FText />
      <FFacilities />
    </div>
  );
};

export default ForestVilla;
