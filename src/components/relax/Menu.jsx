import React, { useState } from "react";
import Yoga from "./Yoga";
import Massage from "./Massage";
import Beauty from "./Beauty";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("beauty");

  const menus = ["beauty", "massage", "yoga"];

  const renderMenu = () => {
    switch (activeMenu) {
      case "beauty":
        return (
          <div>
            <Beauty />
          </div>
        );
      case "yoga":
        return (
          <div>
            <Yoga />
          </div>
        );
      case "massage":
        return (
          <div>
            <Massage />
          </div>
        );
      default:
        return (
          <div>
            <Beauty />
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
