import React from "react";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12 ">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">S.JALAL</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/mdAbirDeveloper">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/shah-jalal-programmer/">
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/8801832822560"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@ 2024 S.JALAL</p>
    </div>
  );
};

export default Footer;
