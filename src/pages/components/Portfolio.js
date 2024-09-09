/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://youtube-portfolio-backend.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="relative max-w-[800px] mx-auto md:p-6 p-0 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      <div className="glass p-6 w-full border-2 max-w-[600px]">
        <div className="w-full md:h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className="text-gray-200 my-4">{projects[currentProject].description}</p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].site_link}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].github_link}
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;

