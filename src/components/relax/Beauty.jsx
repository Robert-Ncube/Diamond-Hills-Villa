import React from "react";

const Dessert = () => {
  return (
    <div className="h-full text-center">
      <h2 className="text-4xl font-[headfont] mb-5">Beauty Treatments</h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Hydrafacial</h3>
            <p>
              This treatment uses a patented device to cleanse, exfoliate, and
              hydrate the skin. It helps to improve the appearance of fine
              lines, wrinkles, and congested pores, leaving the skin looking
              fresh and rejuvenated.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Chemical Peel</h3>
            <p>
              A solution is applied to the skin to remove dead skin cells and
              stimulate the production of new skin cells. This treatment can
              help to reduce the appearance of acne scars, age spots, and fine
              lines.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Microdermabrasion</h3>
            <p>
              This non-invasive procedure uses tiny crystals to exfoliate the
              skin and remove dead skin cells. It helps to improve skin texture
              and tone, and can reduce the appearance of sun damage and minor
              scars.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">LED Light Therapy</h3>
            <p>
              Different wavelengths of light are used to target various skin
              concerns, such as acne, inflammation, and signs of aging. This
              treatment can help to boost collagen production and improve
              overall skin health.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Body Scrub</h3>
            <p>
              A full-body exfoliation treatment that removes dead skin cells and
              promotes circulation. It leaves the skin feeling smooth and
              refreshed, and can be followed by a moisturizing treatment for
              added hydration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
