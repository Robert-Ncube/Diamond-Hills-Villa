import React from "react";
import Hero from "../components/home/Hero";
import DiscoverVillas from "../components/home/DiscoverVillas";
import DiscoverRestaurant from "../components/home/DiscoverRestaurant";
import DiscoverSpar from "../components/home/DiscoverSpar";

const Home = () => {
  return (
    <div>
      <Hero />
      <DiscoverVillas />
      <div className="welcome-div p-5 text-center border-2 lg:h-[10rem]">
        <h1 className="text-4xl font-sm my-2">
          Welcome to Diamond Hills Villa
        </h1>
        <p className="text-md my-2">
          Experience the luxury and serenity of our villas at Diamond Hills
          Villa. Our villas are designed to provide a private and comfortable
          stay for your family.
        </p>
      </div>
      <DiscoverRestaurant />
      <DiscoverSpar />
    </div>
  );
};

export default Home;
