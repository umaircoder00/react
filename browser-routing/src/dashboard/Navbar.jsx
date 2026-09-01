import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/contact"}>contact</Link>
      <Link to={"/login"}>login</Link>
      <Outlet />
    </div>
  )
}

export default Navbar
