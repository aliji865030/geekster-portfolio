import React from 'react'

const NavBar = () => {
  return (
   <>
   <ul className='flex justify-center items-center gap-5 text-white px-7 py-5 rounded-es-2xl rounded-se-xl' style={{backgroundColor:"#294047"}}>
    <li>
        <a href="#">About</a>
    </li>
    <li>
        <a href="#">Certificates</a>
    </li>
    <li>
        <a href="#">Projects</a>
    </li>
    <li>
        <a href="#">More</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
   </ul>
   </>
  )
}

export default NavBar
