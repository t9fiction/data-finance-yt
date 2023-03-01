"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white">
      {/* Desktop navbar */}
      <div className="hidden h-12 max-w-[1240px] mx-auto px-4 md:flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[rgb(0,223,154)]">React</h1>
        <ul className="hidden md:flex space-x-6 mx-4 uppercase">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden">
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">React</h1>
        <div className="right-4 top-6 fixed" onClick={handleNav}>
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-10 w-[60%] bg-[#000300] border-r border-r-gray-700 h-full ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-8">
            <li className="border-b border-gray-600 p-4">Home</li>
            <li className="border-b border-gray-600 p-4">Company</li>
            <li className="border-b border-gray-600 p-4">Resources</li>
            <li className="border-b border-gray-600 p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
