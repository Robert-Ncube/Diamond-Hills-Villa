import React from "react";
import Testimonials from "../components/blog/Testimonials";
import Activities from "../components/blog/Activities";
import TravelTips from "../components/blog/TravelTips";
import BehindTheScenes from "../components/blog/BehindTheScenes";
import Gallery from "../components/blog/Gallery";

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 pt-18 lg:pt-24">
      <header className="bg-slate-200 shadow-md mt-8">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl md:text-4xl lg:5xl font-bold text-gray-900 text-center font-[headfont]">
            Villa Blog
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 text-center">
        <section className="mb-8 h-auto">
          <Activities />
        </section>

        <section className="mb-8 h-auto">
          <Testimonials />
        </section>

        <section className="mb-8 h-auto">
          <TravelTips />
        </section>

        <section className="mb-8 h-auto">
          <BehindTheScenes />
        </section>

        <section className="mb-8 h-auto  bg-slate-200 py-14 rounded-xl shadow-lg shadow-black">
          <div className="h-[20%] px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl bg-slate-400 p-2 rounded-lg inline-block font-[headfont] font-bold text-gray-800 mb-4">
              Photo Galleries
            </h2>
            <p className="py-5">
              Browse through our photo galleries showcasing the villa and local
              scenery.
            </p>
          </div>

          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default Blog;
