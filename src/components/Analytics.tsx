import Image from "next/image";
import React from "react";
import ImgLaptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="py-16 px-4 w-full bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          src={ImgLaptop}
          alt="Laptop"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col space-y-2 justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl font-bold sm:text-3xl text-2xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] hover:shadow-sm hover:shadow-black w-[200px] rounded-md font-medium py-1 md:py-2 mx-auto md:mx-0 hover:bg-transparent hover:bg-[#00df9a] hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
