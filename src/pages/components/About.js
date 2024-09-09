/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiFirebase,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiBootstrap className="text-pink-600" />
        <DiJavascript1 className="text-purple-600" />
        <DiMongodb className="text-green-600" />
        <DiReact className="text-blue-600" />
        <DiNodejs className="text-green-600" />
      </div>


{/* first items */}
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src="project1.png"
            className="rounded-lg md:max-w-[500px]"
            alt="project 1"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          As a passionate web developer with 4 years of experience, I have a
          proven track record of creating visually stunning and responsive websites.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-pink-600" />
          <DiJavascript1 className="text-purple-600" />
          <DiMongodb className="text-green-600" />
          <DiReact className="text-blue-600" />
          <DiNodejs className="text-green-600" />
          <DiFirebase className="text-yellow-600"></DiFirebase>
        </div>
      </div>

      {/* secound Items */}

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Frontend Experience</h2>
        <p className="text-gray-300 mb-4">
            Experience in creating morder, responsive web applications using the latest FrontEnd technologis
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-pink-600" />
          <DiJavascript1 className="text-purple-600" />
          <DiMongodb className="text-green-600" />
          <DiReact className="text-blue-600" />
        </div>
      </div>

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src="project4.png"
            className="rounded-lg md:max-w-[500px]"
            alt="project 2"
          />
        </div>
      </div>

      {/* third items */}

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>

        <div className="relative w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
          style={{border: ''}}
            src="project5.png"
            className="rounded-lg md:max-w-[500px]"
            alt="project 3"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Fullstack Experience</h2>
        <p className="text-gray-300 mb-4">
            Slikked in developing end-to-end solutions using FullStack technologis.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-pink-600" />
          <DiJavascript1 className="text-purple-600" />
          <DiMongodb className="text-green-600" />
          <DiReact className="text-blue-600" />
          <DiNodejs className="text-green-600" />
          <DiFirebase className="text-yellow-600"/>
        </div>
      </div>
    </div>
  );
};

export default About;
