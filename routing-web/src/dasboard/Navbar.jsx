import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-amber-950 text-white shadow-2xl gap-3'>
      <Link className='ml-2 pt-2 font-bold' to={"/"}>home</Link>
      <Link className='ml-2 pt-2 font-bold' to={"/about"}>about</Link>
      <Link className='ml-2 pt-2 font-bold' to={"/contact"}>contact</Link>
      {/* <Outlet /> */}
    </div>
  )
}

export default Navbar
