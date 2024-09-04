import React from "react";

const Dinner = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Massages</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Swedish Massage</h3>
            <p>
              This classic massage uses long, flowing strokes to promote
              relaxation and improve circulation. It's perfect for relieving
              stress and tension.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Deep Tissue Strike</h3>
            <p>
              Focused on deeper layers of muscles and connective tissue, this
              massage uses more intense pressure to alleviate chronic pain and
              muscle knots.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Hot Stone</h3>
            <p>
              Smooth, heated stones are placed on specific points of the body to
              warm and loosen tight muscles, enhancing the overall relaxation
              experience.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Aromatherapy Massage</h3>
            <p>
              Combining the benefits of massage with the therapeutic properties
              of essential oils, this treatment aims to improve both physical
              and emotional well-being.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Reflexology</h3>
            <p>
              Focusing on pressure points in the feet, hands, and ears,
              reflexology aims to promote healing and relaxation throughout the
              entire body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
