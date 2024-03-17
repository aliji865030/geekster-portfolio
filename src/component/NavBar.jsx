import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <>
   <ul className='flex text-xl font-semibold justify-center items-center gap-10 text-white px-12 py-5 rounded-es-2xl rounded-se-xl' style={{backgroundColor:"#294047"}}>
    <li>
        {/* <a href="#">About</a> */}
        <NavLink to="/">About</NavLink>
    </li>
    <li>
        {/* <a href="#">Projects</a> */}
        <NavLink to="/project">Projects</NavLink>
    </li>
    <li>
        {/* <a href="#">Contact</a> */}
        <NavLink to="/contact">Contact</NavLink>
    </li>
   </ul>
   </>
  )
}

export default NavBar
