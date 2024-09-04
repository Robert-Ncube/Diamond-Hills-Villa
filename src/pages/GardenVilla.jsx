import React from "react";
import Hero from "../components/stay/g-v-hero";
import GHooker from "../components/stay/G-Hooker";
import GGallery from "../components/stay/G-Gallery";
import GText from "../components/stay/G-Text";
import GFacilities from "../components/stay/G-Facilities";

const GardenVilla = () => {
  return (
    <div className="h-auto text-center pt-20 md:pt-24">
      <Hero />
      <GHooker />
      <GGallery />
      <GText />
      <GFacilities />
    </div>
  );
};

export default GardenVilla;
