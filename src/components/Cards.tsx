import Image from "next/image";
import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full p-[4rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100">
          <Image
            src={single}
            alt="single"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black mt-2 hover:shadow-sm hover:shadow-black text-[#00df9a] w-[100px] sm:w-[150px] md:w-[200px] rounded-md font-medium py-1 md:py-2 mx-auto hover:bg-[#00df9a] hover:text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-lg flex flex-col p-4 my-8 md:my-4 hover:bg-gray-100 rounded-lg hover:scale-105 duration-300">
          <Image src={double} alt="single" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black mt-2 hover:shadow-sm hover:shadow-black text-[#00df9a] w-[100px] sm:w-[150px] md:w-[200px] rounded-md font-medium py-1 md:py-2 mx-auto hover:bg-[#00df9a] hover:text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100">
          <Image src={triple} alt="single" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Triple Users</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black mt-2 hover:shadow-sm hover:shadow-black text-[#00df9a] w-[100px] sm:w-[150px] md:w-[200px] rounded-md font-medium py-1 md:py-2 mx-auto hover:bg-[#00df9a] hover:text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
