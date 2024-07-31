import React from "react";
import AboutMe from "../component/AboutMe";
import NavBar from "../component/NavBar";
import ProjectCard from "../component/ProjectCard";
import pokemon from "./../asset/pokemon.png"
import apple from "./../asset/apple.png"
import image from "./../asset/image.png"
import food from "./../asset/foodDel.png"
import sms from "./../asset/sms.png"
import movie from "./../asset/movie.png"

const ProjectScreen = () => {
  return (
    <div className=" px-48 py-10" style={{backgroundImage:"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)", minHeight:"100vh"}}>
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

        <div className="flex justify-center flex-wrap my-12 gap-10">
            
            <ProjectCard link={"https://taste-trekker.vercel.app/"} heading={"Taste Trekker Food Delivery App"} para={"Design + Frontend | Backend "} img={food} github={"https://github.com/aliji865030/food-del-frontend"} ></ProjectCard> 

            <ProjectCard link={"https://school-management-app-topaz.vercel.app/"} heading={"School Management System"} para={"Design + Frontend | Backend "} img={sms} github={"https://github.com/aliji865030/schoolManagementAppFrontend"} ></ProjectCard>

            <ProjectCard link={"https://movix-omega-topaz.vercel.app/"} heading={"Movie App"} para={"Design + Frontend | React "} img={movie} github={"https://github.com/aliji865030/movix"} ></ProjectCard> 

            <ProjectCard github={"https://github.com/aliji865030/pokemon"} link={"https://aliji865030.github.io/pokemon/"} heading={"Pokemon"} img={pokemon} para={"Design + Frontend | js "}></ProjectCard>

            <ProjectCard github={"https://github.com/Shivambansal96/TEAM-APPLE-GEEKATHON"} link={"https://shivambansal96.github.io/TEAM-APPLE-GEEKATHON/Homepage_by_Shivam/"} img={apple} para={"Design + Frontend | html | css"} heading={"Apple Clone"}></ProjectCard>

            <ProjectCard link={"https://aliji865030.github.io/image_finder/"} heading={"Image Finder"} para={"Design + Frontend | html | css"} img={image} github={"https://github.com/aliji865030/image_finder"} ></ProjectCard>
        </div>

      </div>
    </div>
  );
};

export default ProjectScreen;
