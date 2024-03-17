import React, { useRef, useState } from "react";
import AboutMe from "../component/AboutMe";
import NavBar from "../component/NavBar";

const AboutScreen = () => {
  const tempPara=` Hello there! 👋 My name is Abbas Ali and I'm from Khatima, Uttrakhand. As a
  frontend developer, I specialize in creating visually
  appealing websites, apps and games. My passion for graphic
  design isn't just a hobby, it's a key ingredient in every project I
  work on.`
  
  const [para,setPara]=useState(tempPara);
  const [show,setShow]=useState("Show More")

  function showPara(e){

   if(e.target.innerText==="Show More"){
    
    const tempPara=`Hello there! 👋 My name is Abbas Ali and I'm from Khatima, Uttrakhand. As a
    frontend developer, I specialize in creating visually
    appealing websites, apps and games. My passion for graphic
    design isn't just a hobby, it's a key ingredient in every project I
    work on. Growing up bilingual, I developed a love for languages and
    I currently speak four of them fluently. I believe that this skill
    has given me a unique perspective and allows me to communicate
    effectively with clients from all over the world. One of my
    strengths is adding a personal touch to my projects by adding the
    client's identity and message into the design, creating meaningful
    and beautiful end products that are both eye-catching and
    user-friendly. In my free time, I enjoy exploring my other passions,
    such as photography and music production, which provide me with
    creative outlets. I am also very passionate about Web3 and
    everything related to crypto, NFTs and blockchain technology as I
    believe they have the potential to revolutionize business and online
    interactions. If you have an innovative idea for a project that
    needs to be developed, I would love to hear from you. Your vision
    can be turned into a real product. Don't hesitate to reach out and
    let's start a conversation about your concept. I'm excited to
    collaborate and help bring your ideas to life.`

    setPara(tempPara)
    setShow("Hide text")


   }
   if(e.target.innerText==="Hide text"){
    const tempPara=`Hello there! 👋 My name is Abbas Ali and I'm from Khatima, Uttrakhand. As a
    frontend developer, I specialize in creating visually
    appealing websites, apps and games. My passion for graphic
    design isn't just a hobby, it's a key ingredient in every project I
    work on.`

    setPara(tempPara)
    setShow("Show More")
   }

  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        height: "5000px",
      }}
      className=" px-48 py-10"
    >
      <div className="w-4/12">
        <AboutMe></AboutMe>
      </div>

      <div className="ml-80 border border-black w-9/12 bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl">
        <div className="flex justify-between items-center w-full  ">
          <div className="text-3xl font-semibold text-white ml-10">
            <p>About Me</p>
          </div>
          <div>
            <NavBar></NavBar>
          </div>
        </div>

        <div  className=" bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl px-5 py-3 mx-12 mt-10 text-white">
          <p >
            {para}
          </p>
          <button onClick={(e)=>{showPara(e)}} className="my-4">{show}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
