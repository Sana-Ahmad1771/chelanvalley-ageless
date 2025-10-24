import React from "react";
import { Home } from "lucide-react";

const AboutHero = () => {
  return (
    <section className=" relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white overflow-hidden px-8 py-4 ">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.jpg')] w-full bg-no-repeat bg-cover bg-center opacity-10"></div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex items-center justify-between">
        <h1 className="text-lg font-semibold">About Us</h1>
        <div className="flex items-center gap-2 text-sm">
          <Home className="w-4 h-4" />
          <span>{">"}</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
