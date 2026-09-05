import React from 'react'
import { getAuth ,signOut } from 'firebase/auth'
import app from '../firebase/config'
const Home = () => {
  const auth = getAuth(app)

  const logOutHandler= () =>{
    signOut(auth)
  }
  return (
    <div >
    <h1 className='text-2xl font-bold text-center mt-10'>Welcome to Dashboard</h1>
      
      <button className='font-bold text-blue-800 text-center cursor-pointer border-1 rounded-2xl w-[70px] h-[50px] ml-160 mt-10'  onClick={logOutHandler}>logout</button>
    </div>
  )
}

export default Home
