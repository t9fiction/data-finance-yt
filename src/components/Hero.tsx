import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-[93vh] mx-auto flex flex-col justify-center align-middle text-center md:space-y-4 sm:space-y-2 space-y-1 pb-8">
        <p className="uppercase text-[11px] sm:text-[16px] md:text-[18px] text-[#00df9a] font-bold">
          Growing with data analytics
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide">
          Grow with Data
        </h1>
        <div>
          <p className="text-lg sm:text-2xl md:text-4xl font-bold">Fast, flexible financing for</p>
          {/* react-typed package not supported by react 17/18 */}
        </div>
        <p className="md:text-2xl text-lg text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] hover:shadow-sm hover:shadow-white text-black w-[200px] rounded-md font-medium py-1 md:py-2 mx-auto hover:bg-transparent hover:text-[#00df9a]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
