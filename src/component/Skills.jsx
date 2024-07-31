import React from 'react'

const Skills = () => {
  return (
    <div className='text-8xl flex flex-wrap justify-center gap-14 mx-12 p-5 py-10 my-5 bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl'>
      <div className='flex flex-col'>
        <span className='text-3xl font-bold'>HTML</span>
      <i className="fa-brands fa-html5 text-red-500"></i>
      </div>


      <div className='flex flex-col'>
        <span className='text-3xl font-bold'>CSS</span>
        <i className="fa-brands fa-css3-alt text-blue-600"></i>
      </div>


      <div className='flex flex-col'>
        <span className='text-3xl font-bold'>JS</span>
        <i className="fa-brands fa-js text-yellow-400"></i>
      </div>

      <div>
      <i className="fa-brands fa-react text-sky-300"></i>
      </div>

      <div>
      <i className="fa-brands fa-node text-green-950"></i>
      </div>

      <div>
      <i className="fa-brands fa-npm text-red-600"></i>
      </div>

      <div>
      <i className="fa-brands fa-github"></i>
      </div>

      <div>
      <i className="fa-brands fa-figma"></i>
      </div>

      <div>
      <i className="fa-brands fa-git-alt text-orange-600"></i>
      </div>

      <div>
      <i className="fa-brands fa-bootstrap text-blue-600"></i>
      </div>

      <div>
      <i class="fa-brands fa-sass"></i>
      </div>


    </div>
  )
}

export default Skills
