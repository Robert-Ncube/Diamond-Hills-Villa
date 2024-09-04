import React, { useState } from "react";
import Starters from "./Starters";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Dessert from "./Dessert";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("starters");

  const menus = ["starters", "breakfast", "lunch", "dinner", "desserts"];

  const renderMenu = () => {
    switch (activeMenu) {
      case "starters":
        return (
          <div>
            <Starters />
          </div>
        );
      case "breakfast":
        return (
          <div>
            <Breakfast />
          </div>
        );
      case "lunch":
        return (
          <div>
            <Lunch />
          </div>
        );
      case "dinner":
        return (
          <div>
            <Dinner />
          </div>
        );
      case "desserts":
        return (
          <div>
            <Dessert />
          </div>
        );
      default:
        return (
          <div>
            <Starters />
          </div>
        );
    }
  };

  return (
    <div className="h-auto flex flex-col p-10 ">
      <nav className="flex justify-center space-x-4 bg-slate-200 p-4 rounded-t-xl">
        {menus.map((menu) => (
          <button
            key={menu}
            className={`px-2 md:px-4 py-2 rounded-xl ${
              activeMenu === menu ? "bg-gold text-white" : "bg-white text-black"
            }`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu.charAt(0).toUpperCase() + menu.slice(1)}
          </button>
        ))}
      </nav>
      <div className="flex-grow p-4 bg-slate-50 rounded-b-xl">
        {renderMenu()}
      </div>
    </div>
  );
};

export default Menu;
