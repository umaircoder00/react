import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'; 



const home = () => {
    const [users , setUsers] = useState([])
    const [loading,setLoading] = useState(true)
   const getData = async () => {
  try {
    
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response.data); 
    setUsers(response.data.users)
  } catch (error) {

    console.error("API call failed:", error);
    
}finally{
  setLoading(false)
}
}
useEffect(() => {
   getData()
},[])

if(loading){
  return <h1>loading users data...</h1>
}



  return (
    <div className='dash'>
      <h1>Dashboard</h1>
       {users && users.length > 0 ?(
        users.map((user)=>(<Card key={user.id} data={user}/>))
        
      ): (<p>users not found</p>

      ) }

    </div>
  )
}

export default Home
