import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='h-screen bg-color-blue '>
      Dashboard
      <div className='bg-blue'>
        
        {[
        {
          name: "profile",
          url: "profile"
        },{
           name: "setting",
          url: "setting"
        }
      ].map((item,idx) =>(
         <Link key={idx} to={item.url}>
       <li>{item.name}</li></Link>
      ) )
}
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard
