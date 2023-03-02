import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 text-gray-300">
      {/* First Grid */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[rgb(0,223,154)]">React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet!
        </p>
        <div className="flex justify-around md:mr-20">
          <FaFacebookSquare size={25} />
          <FaTwitterSquare size={25} />
          <FaGithubSquare size={25} />
          <FaDribbbleSquare size={25} />
          <FaInstagram size={25} />
        </div>
      </div>

      {/* Second grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-around">
        <div className="h-22">
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul className="space-y-1 mt-3">
            <li className="text-sm">Analytics</li>
            <li className="text-sm">Marketing</li>
            <li className="text-sm">Commerce</li>
            <li className="text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul className="space-y-1 mt-3">
            <li className="text-sm">Pricing</li>
            <li className="text-sm">Documentation</li>
            <li className="text-sm">Guides</li>
            <li className="text-sm">API Status</li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul className="space-y-1 mt-3">
            <li className="text-sm">About</li>
            <li className="text-sm">Blog</li>
            <li className="text-sm">Jobs</li>
            <li className="text-sm">Press</li>
          </ul>
        </div>
        <div className="align-middle mt-10 sm:mt-0">
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul className="space-y-1 mt-3">
            <li className="text-sm">Claim</li>
            <li className="text-sm">Insurance</li>
            <li className="text-sm">Policy</li>
            <li className="text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
