import React, { useRef, useState } from "react";
import AboutMe from "../component/AboutMe";
import NavBar from "../component/NavBar";
import Card from "../component/Card";
import LanguageCard from "../component/LanguageCard";
import Skills from "../component/Skills";
import ActivityCard from "../component/ActivityCard";

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
    <div className=" px-48 py-10" style={{backgroundImage:"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}}>
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
          <p className="text-start" style={{color:"fafafa"}} >
            {para}
          </p>
          <div className="text-center jumping-text"><button onClick={(e)=>{showPara(e)}} className="my-4">{show}</button></div>
        </div>
        
        <div>
        <h1 className="text-3xl font-semibold text-white py-5 text-center">Primary Focus</h1>
        </div>

        <div className="flex flex-wrap p-5 px-12 gap-5">
           <Card img={"https://oktayshakirov.com/assets/images/icon-dev.svg"} heading={"Web Design & Development" } para={"Creating attractive, easy-to-use websites that work well for businesses and individuals online."}></Card>
           <Card img={"https://oktayshakirov.com/assets/images/icon-app.svg"} heading={"Mobile Apps & Games"} para={"Creating and developing engaging mobile apps and games for iOS and Android devices."}></Card>
           <Card img={"https://oktayshakirov.com/assets/images/icon-frameworks.svg"} heading={"Development Solutions"} para={"Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."}></Card>
           <Card img={"https://oktayshakirov.com/assets/images/icon-marketing.svg"} heading={"Marketing & SEO"} para={"Using SEO and marketing strategies to boost online visibility and promote products or services."}></Card>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-white py-5 text-center">Exploring Creativity</h1>
        </div>

        <div className="flex flex-wrap p-5 px-12 gap-5">
          <Card img={"https://oktayshakirov.com/assets/images/icon-video.svg"} heading={"Visual Storytelling"} para={"Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."}></Card>
          <Card img={"https://oktayshakirov.com/assets/images/icon-multimedia.svg"} heading={"Digital Content Creation"} para={"Creatiing dynamic digital content, such as 3D models, graphics or animations."}></Card>

        </div>

        <div>
          <h1 className="text-3xl font-semibold text-white py-5 text-center">Languages</h1>
        </div>

        <div className="flex bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl mx-12 my-5 pl-10 py-10" style={{color:"#fafafa"}}>
          <LanguageCard></LanguageCard>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-white py-5 text-center">Development Skills</h1>
        </div>

        <Skills></Skills>

        <div>
          <h1 className="text-3xl font-semibold text-white py-5 text-center">Favorite Activities</h1>
        </div>


        <div className="flex flex-wrap gap-12 text-white justify-center mt-8 mb-10">
          <ActivityCard img={"https://oktayshakirov.com/assets/images/finances.png"} heading={"Investments"} para={"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"}></ActivityCard>

          <ActivityCard img={"https://oktayshakirov.com/assets/images/music.png"} heading={"Music"} para={"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"}></ActivityCard>

          <ActivityCard img={"https://oktayshakirov.com/assets/images/books.png"} heading={"Reading"} para={"Books on Self-Improvement, Psychology and Understanding Life Better."}></ActivityCard>

          <ActivityCard img={"https://oktayshakirov.com/assets/images/camera.png"} heading={"Photography"} para={"Capturing precious moments and memories through the lens of a camera."}></ActivityCard>
        </div>



      </div>

      
    </div>
  );
};

export default AboutScreen;
