import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center align-middle text-center space-y-4">
        <p className="uppercase text-[11px] sm:text-[16px] md:text-[18px] text-[#00df9a] font-bold">
          Growing with data analytics
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold md:py-6">
          Grow with Data
        </h1>
        <div className="pt-2">
          <p>Fast, flexible financing for</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
