import React from 'react'
// import Buttons from './Button'
import Buttons from './Button'
import { auth } from '../Config.js';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup } from 'firebase/auth';

const SigninWithGoolge = ({title}) => {

     const signupWithGoolgeHandler = async () => {
       console.log("mera goole chala");
       
        try {
          const provider = new GoogleAuthProvider();
        let response = await  signInWithPopup(auth, provider)
    
        console.log(response);
        
         if(response.user){
    
            toast.success("user signup sucessfully")
          }
    
        } catch (error) {
          toast.error(error.message);
          
        }
    
      }
  return (
     <Box sx={{
             // marginLeft:'100px',
             display:'flex',
             justifyContent:'center',
             marginTop:'10px',
             marginBottom:'7px'
            }}>
               <Buttons handler={signupWithGoolgeHandler} title={title}/>
            </Box>
  )
}

export default SigninWithGoolge
