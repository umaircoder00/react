import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen bg-amber-50'>
      <Navbar />
     <div className='flex gap-2'>
       <div className='text-amber-300 bg-amber-800 w-[30%] h-screen  ml-2 rounded-2xl mt-2'>
        {[
          {
            name:"profile",
            url: "profile"
          },{
             name:"setting",
            url: "setting"
          }
        ].map((item,idx) => ( <Link key={idx} to={item.url}>
          <li className=' text-white ml-3  mt-2.5'>{item.name}</li>
        </Link>
          
        ))}
      
       </div>
      
      <div className='text-white  bg-amber-500 w-[69%] h-screen ml-2 rounded-2xl mt-2 shadow-2xl'>
        <Outlet />
      </div>
     </div>
    </div>
  )
}

export default Dashboard
