import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Button, Paper, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../components/Input.jsx'
import BasicTextFields from '../../components/Input'
import Buttons from '../../components/Button'
import { auth } from '../../Config.js';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { data, Link } from 'react-router-dom';
import SigninWithGoolge from '../../components/SigninWithGoolge.jsx';

// import { red } from '@mui/material/colors'


import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../Config.js';




  // console.log("form:",form)
  
 
  
  
   export const saveDataIntoDB = async (name = "", data) => {
 console.log(data)


try {
 await setDoc(doc(db, "users", data.uid), {
  
   
  email : data.email,
  name: data.displayName ? data.displayName : name ,
  photoURL: data.photoURL ? data.photoURL : ""
  
})



} catch (error) {
  console.log(error)
 
}
}

const Signup = () => {
  
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: ""
  });

  const handleInputChange = (key, value) => {
    console.log("handle Working", value, key)
    setForm((prev) => ({ ...prev, [key]: value }))
  }


  const signupHandler = async () => {
    console.log("mera signuup funstion chala", form)
    try {
      let response = await createUserWithEmailAndPassword(auth, form.email, form.password)

      if(response.user){

      await  saveDataIntoDB(form.username, response.user)
        toast.success("user signup sucessfully")
      }
      console.log(response);


    } catch (error) {
      console.log(error.message)
      console.log(error.code)
      if (error.message == "FirebaseError: Firebase: Error (auth/email-already-in-use)." || 
      error.code == "auth/email-already-in-use"){
      
        toast.error("Email already exist");
      }

    }
  }


  

  const signupWithGoolgeHandler = async () => {
   console.log("mera googgle chala");
   
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
    <>
        
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Paper elevation={2}
          sx={{
            width: 400,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

          }}>
         <Box sx={{
          // marginLeft:'100px',
          display:'flex',
          justifyContent:'center',
           marginTop:'10px',
          marginBottom:'7px'
         }}>
           <h1>SignUp</h1>
         </Box>


          <Input
            handler={handleInputChange}
            label={"Enter your username"}
            type={"username"}
            value={form.username}

          />
          <Input
            handler={handleInputChange}
            label={"Enter your Email"}
            type={"email"}
            value={form.email}
          />

          <Input
            handler={handleInputChange}
            label={"Enter your password"}
            type={"password"}
            value={form.password}
          />

         
        
         {/* <Box sx={{
          // marginLeft:'100px',
          display:'flex',
          justifyContent:'center',
          marginTop:'10px',
          marginBottom:'7px'
         }}>
            <Buttons handler={signupWithGoolgeHandler} title='SignUp with Google'/>
         </Box> */}
         <SigninWithGoolge title={"signUp with Google"}/>
         <Box sx={{
          // marginLeft:'100px',
          display:'flex',
          justifyContent:'center',
           marginTop:'10px',
          marginBottom:'7px'
         }}>
           <Buttons handler={signupHandler} title='Signup' />

         </Box>
           <Link to={"/login"}><Typography sx={{ display:'flex',
          justifyContent:'center', marginTop:'10px', marginBottom:"10px"}}>Go to login page ... </Typography></Link>

        
        
        </Paper>
      </Box>
      <ToastContainer />

    </>
  )
}

export default Signup
