import React, { useEffect, useState } from 'react'
// import Navbar from "../../components/Navbar.jsx";
import { auth } from '../../Config.js';
import { Box } from '@mui/material';

// import CreateBlogModal from '../../components/CreateBlogModal.jsx';
// import { onAuthStateChanged } from 'firebase/auth';
// import CreateBolgModal from '../component/CreateBolgModal'
// import CreateBlogModal from '../component/CreateBlogModal';
// import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar"
import { onAuthStateChanged } from 'firebase/auth';

const Blog = () => {
    const [users , setUser] = useState(null)
       const getUser = () => {
            onAuthStateChanged(auth, (user) => {
              if(user){
                const uid = user.uid
    
                setUser(user)
                console.log(user)
    
            }  else{
                setUser(null)
            }
    
           
            })
         }

    useEffect(() => {
     getUser() 
    },[])
  return (
    <div>
        <Navbar />
      
    
    </div>
  )
}

export default Blog
