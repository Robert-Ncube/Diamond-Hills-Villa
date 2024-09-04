import React from "react";
import { Link } from "react-router-dom";
import PHero from "../components/stay/P-Hero";
import PHooker from "../components/stay/P-Hooker";
import PGallery from "../components/stay/P-Gallery";
import PText from "../components/stay/P-Text";
import PFacilities from "../components/stay/P-Facilities";

const PoolVilla = () => {
  return (
    <div className="h-auto text-center pt-20 md:pt-24">
      <PHero />
      <PHooker />
      <PGallery />
      <PText />
      <PFacilities />
    </div>
  );
};

export default PoolVilla;
