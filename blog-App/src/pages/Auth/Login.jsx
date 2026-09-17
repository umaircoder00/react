import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Box, Button, Paper, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../component/Input.jsx'
import BasicTextFields from '../../component/Input'
import Buttons from '../../component/Button'
import { auth } from '../../Config.js';
import { Link } from 'react-router-dom';
import SigninWithGoolge from '../../component/SigninWithGoolge.jsx';
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import { red } from '@mui/material/colors'


const Login = () => {


  const [form, setForm] = useState({
    email: "",
    password: "",
    username: ""
  });
  // console.log("form:",form)

  const handleInputChange = (key, value) => {
    console.log("handle Working", value, key)
    setForm((prev) => ({ ...prev, [key]: value }))
  }


  const LoginHandler = async () => {
    console.log("mera login funstion chala", form)
    try {
      let response = await signInWithEmailAndPassword(auth, form.email, form.password)

      if (response.user) {

        toast.success("user Login sucessfully")
      }
      console.log(response);


    } catch (error) {
      console.log(error.message)
      console.log(error.code)
      if (error.message == "Firebase: Error (auth/invalid-credential)." ||
        error.code == "auth/invalid-credential") {

        toast.error("Invalid Credential");
      }

    }
  }

  // const LoginWithGoolgeHandler = async () => {
  //  console.log("mera goole chala");

  //   try {
  //     const provider = new GoogleAuthProvider();
  //   let response = await  signInWithPopup(auth, provider)

  //   console.log(response);

  //    if(response.user){

  //       toast.success("user Login sucessfully")
  //     }

  //   } catch (error) {
  //     toast.error(error.message);

  //   }

  // }
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
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '7px'
          }}>
            <h1>Login</h1>
          </Box>



          <Input
            handler={handleInputChange}
            labal={"Enter your Email"}
            type={"email"}
            value={form.email}
          />

          <Input
            handler={handleInputChange}
            labal={"Enter your password"}
            type={"password"}
            value={form.password}
          />


<Box sx={{
            // marginLeft:'100px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '7px'
          }}>
            <SigninWithGoolge title={"sign in with Google"}/>
          </Box>
  
          <Box sx={{
            // marginLeft:'100px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '7px'
          }}>
            <Buttons handler={LoginHandler} title='Login' />
          </Box>
 <Link to={"/signup"}><Typography sx={{ display:'flex',
          justifyContent:'center', marginTop:'10px', marginBottom:"10px"}}>Go to signup page ... </Typography></Link>
        </Paper>
      </Box>
      <ToastContainer />

    </>
  )
}

export default Login

