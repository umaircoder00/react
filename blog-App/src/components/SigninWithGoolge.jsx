import React from 'react'
// import Buttons from './Button'
import Buttons from './Button'
import { auth } from '../Config.js';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { saveDataIntoDB } from '../pages/Auth/Signup.jsx';

const SigninWithGoolge = ({title}) => {
const navigate = useNavigate()
     const signupWithGoolgeHandler = async () => {
       console.log("mera google chala");
       
        try {
          const provider = new GoogleAuthProvider();
        let response = await  signInWithPopup(auth, provider)
    
        console.log(response);
        saveDataIntoDB("",response.user)
         if(response.user){
    
            toast.success("user signup sucessfully")
            navigate("/")
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
