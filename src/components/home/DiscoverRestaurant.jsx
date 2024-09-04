import React from "react";
import { Link } from "react-router-dom";

const DiscoverRestaurant = () => {
  return (
    <div className="h-screen p-4 lg:p-6 bg-white lg:pt-[2%] border-b-2">
      <div className="h-[100%] flex flex-col items-center md:items-start sm:flex-row gap-4 lg:gap-2">
        <div
          className="rounded-xl lg:rounded-r-none h-[50%] w-[100%] sm:h-[100%]"
          style={{
            backgroundImage: "url('../../../images/d-restaurant1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="bg-slate-200 shadow-black shadow-md rounded-lg lg:rounded-l-none p-4 h-[50%] w-[100%] sm:h-[100%] lg:px-6">
          <h1 className="font-bold font-[headfont] text-2xl md:text-[3.6rem] lg:pt-8 leading-tight">
            The best taste,
            <br /> for you.
          </h1>
          <p className="text-lg my-1 md:my-6">
            This is where culinary excellence meets breathtaking views.Our
            restaurant offers a dining experience like no other. Our talented
            chefs craft each dish with the freshest local ingredients, ensuring
            every bite is a celebration of flavor and quality.
          </p>
          <p className="hidden md:block text-lg md:my-6">
            Our restaurant is more than just a place to eat; it's a destination
            in itself. With its stylish decor and warm, inviting atmosphere, it
            provides the perfect setting for any occasion. Whether you're
            enjoying a leisurely breakfast, a light lunch, or an elegant dinner,
            our diverse menu caters to all tastes and preferences. Pair your
            meal with a selection from our curated wine list, featuring both
            local and international favorites.
          </p>
          <button className="bg-slate-800 text-white p-2 my-4 rounded-md uppercase font-semibold text-center md:text-start">
            <Link to="/dine">Dine With Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverRestaurant;
