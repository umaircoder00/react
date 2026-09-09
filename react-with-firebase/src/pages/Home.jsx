import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js"; 

import { getAuth, signOut } from 'firebase/auth'
import app from '../firebase/config'
import UserCard from '../componenet/UserCard'
import { Form } from 'react-router-dom';

const auth = getAuth()
const Home = () => {
  const [allUsers , setAllUsers] = useState([])
console.log(allUsers);


  const getUsersData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
    let users =  querySnapshot.docs.map((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);

        return{
          id : doc.id,
          ...doc.data()
        }
        
        // setAllUsers((prev) => [...prev ,doc.data()])
      });

      setAllUsers(users);
      
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getUsersData()
  }, [])
  const logOutHandler = () => {
    signOut(auth)
  }
  return (
    <div >
      <nav> <h1 className='text-2xl font-bold text-center mt-10'>Welcome to Dashboard</h1>

        <button className='font-bold text-blue-800 text-center cursor-pointer border-1 rounded-2xl w-[70px] h-[50px] ml-160 mt-10' onClick={logOutHandler}>logout</button></nav>

      {/* main area */}

      {/* cards */}

      <div>
       {allUsers.length > 0 ? allUsers.map((u) =>  <UserCard key={u.id} data={u} />) : <p>loading users ....</p>}
      </div>
    </div>
  )
}

export default Home
