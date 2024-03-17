import React from "react";
import logo from "./../asset/mainImage.jpg"

const AboutMe = () => {
  return (
     <div style={{height:"550px"}} className=' w-64 bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl overflow-hidden fixed'>

    <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-8 border border-black rounded-xl">
      <div className="flex flex-col justify-center items-center gap-3">
        <div >
          <img className="rounded-xl h-52 w-40" src={logo} alt="" />
        </div>
        <div>
          <h1 className=" text-2xl font-semibold">Abbas Ali</h1>
        </div>
        <div>
          <p style={{boxShadow:"0px 0px 10px white"}} className=" border border-black rounded-2xl px-10 py-1  bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl">
            Hello, World !
            </p>
        </div>
      </div>
      

      <div className="flex flex-col justify-center gap-4 ">
        <div className="flex gap-3">
          <div>
            <i className="fa-solid fa-hourglass-end bg-gray-600 p-3 text-yellow-200 rounded-xl"></i>
          </div>
          <div className="flex flex-col text-start">
            <span className="text-sm text-gray-200 m-0">AGE</span>
            <span>23 years old</span>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <i className="fa-solid fa-location-dot bg-gray-600 p-3 text-yellow-200 rounded-xl"></i>
          </div>
          <div className="flex flex-col text-start">
            <span className="text-sm text-gray-200 m-0" >LOCATION</span>
            <span>Khatima, Uttrakhand</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <span className=" text-gray-300 hover:text-gray-200 cursor-pointer">
          <a href="https://github.com/aliji865030">
            <i className="fa-brands fa-github"></i>
          </a>
        </span>
        <span className=" text-gray-300 hover:text-gray-200 cursor-pointer">
          <a href="www.linkedin.com/in/abbas-ali-294821212">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
        <span className=" text-gray-300 hover:text-gray-200 cursor-pointer">
          <a href="https://www.instagram.com/i.abbas_ali/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </span>
        <span className=" text-gray-300 hover:text-gray-200 cursor-pointer">
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </span>
      </div>
    </div>

     </div>

  );
};

export default AboutMe;
