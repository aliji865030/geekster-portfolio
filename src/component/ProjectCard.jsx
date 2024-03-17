import React from 'react'

const ProjectCard = ({img,heading,para,link,github}) => {
  return (
    <div className=' h-auto w-80 text-white bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl flex flex-col gap-3' >
        <div>
            <a href={link}>
                <img src={img} className=' hover:shadow-md cursor-pointer hover:shadow-white hover:transition-all duration-300 ease-linear rounded-xl' alt="" />
            </a>
        </div>
        <div className=' '>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            <p className=' text-gray-300'>{para}</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 my-7'>
            <span className='bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl px-24 py-1 hover:bg-opacity-25 cursor-pointer'><a href={link}><i class="fa-solid fa-eye"></i> Preview</a></span>
            <span className='bg-black bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl px-24 py-1 hover:bg-opacity-25 cursor-pointer'><a href={github}><i class="fa-brands fa-github"></i> Github</a></span>
        </div>
      
    </div>
  )
}

export default ProjectCard;
