import React from "react";
import AboutMe from "../component/AboutMe";
import NavBar from "../component/NavBar";
import ProjectCard from "../component/ProjectCard";
import pokemon from "./../asset/pokemon.png"

const ProjectScreen = () => {
  return (
    <div className=" px-48 py-10">
      <div className="w-4/12">
        <AboutMe></AboutMe>
      </div>

      <div className="ml-80 border border-black w-9/12 bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl"> 

      <div className="flex justify-between items-center w-full  ">
          <div className="text-3xl font-semibold text-white ml-10">
            <p>My Projects</p>
          </div>
          <div>
            <NavBar></NavBar>
          </div>
        </div>

        <div>
            <ProjectCard github={"https://github.com/aliji865030/pokemon"} link={"https://aliji865030.github.io/pokemon/"} heading={"Pokemon"} img={pokemon} para={"Design + Frontend | js "}></ProjectCard>
        </div>

      </div>
    </div>
  );
};

export default ProjectScreen;
