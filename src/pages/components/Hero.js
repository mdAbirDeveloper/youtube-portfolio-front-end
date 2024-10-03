/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY, I AM <br />
          <span className="">SHAH JALAL</span> <br />
          <TypeAnimation
            sequence={[
              "Web Designer",
              1000,
              "Developer",
              1000,
              "Vedio Editor",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">with 4+ years of experience</h2>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
            <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#3d6ca4] to-[#3d6ca4] rounded-xl">
          <a href="/shah-jalal-CV.pdf" download="shah-jalal-CV.pdf">
              Download CV
          </a>
            </button>

          <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              View Work{" "}
            </Link>
          </button>
        </div>
      </div>
      <img src="profile_pic.png" className="w-[300px] md:w-[500px]"></img>
    </div>
  );
};

export default Hero;
