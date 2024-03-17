import React from 'react'
import AboutMe from '../component/AboutMe'
import NavBar from '../component/NavBar'

const ContactScreen = () => {
  return (
    <div className=" px-48 py-10" style={{backgroundImage:"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}}>
        <div className="w-4/12">
        <AboutMe></AboutMe>
      </div>

      <div className="ml-80 border border-black w-9/12 bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl">

      <div className="flex justify-between items-center w-full  ">
          <div className="text-3xl font-semibold text-white ml-10">
            <p>Contact</p>
          </div>
          <div>
            <NavBar></NavBar>
          </div>
        </div>

        <div className='bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl text-white py-10 mx-12 my-12 text-center'>
            <h1 className='text-xl py-3'>Email :</h1>
            <span className='bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl px-5 py-1'>abbasalichand786@gmail.com</span>
        </div>

        <div className='bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl text-white py-10 mx-12 my-12'>
            <h1 className='text-2xl py-3 text-center'>Socials :</h1>

            <div className='text-8xl flex justify-center gap-8 '>
                <span><a href="https://github.com/aliji865030"><i className="fa-brands fa-github hover:text-gray-300"></i></a></span>
                <span><a href="www.linkedin.com/in/abbas-ali-294821212"><i className="fa-brands fa-linkedin hover:text-gray-300"></i></a></span>
                <span><a href="https://www.instagram.com/i.abbas_ali/"><i className="fa-brands fa-square-instagram hover:text-gray-300"></i></a></span>
            </div>
            
        </div>

      </div>
      
    </div>
  )
}

export default ContactScreen
