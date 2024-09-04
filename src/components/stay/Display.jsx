import React from "react";

const Display = () => {
  return (
    <div className="h-[120vh] relative my-4">
      <div
        className="w-full h-[80%]"
        style={{
          backgroundImage: "url(../../../images/s-display1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="w-44 h-[30%] absolute bottom-10 left-[31%] md:left-[37%] lg:left-[42%]"
        style={{
          backgroundImage: "url(../../../images/s-display2.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Display;
