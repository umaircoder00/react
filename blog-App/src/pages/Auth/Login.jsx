
// // import React, { useEffect, useState } from 'react'
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { Box, Button, Paper, Typography } from '@mui/material'
// // import { ToastContainer, toast } from 'react-toastify';
// // // import Input from '../../component/Input.jsx'
// // // import BasicTextFields from '../../component/Input.jsx'
// // import Buttons from '../../component/Button.jsx'
// // import { auth } from '../../Confi/g.js';
// // import { Link } from 'react-router-dom';
// // import SigninWithGoolge from '../../component/SigninWithGoolge.jsx';
// // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import Input from '../../components/Input.jsx';

// // // import { red } from '@mui/material/colors'


// // const Login = () => {


// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //     username: ""
// //   });
// //   // console.log("form:",form)

// //   const handleInputChange = (key, value) => {
// //     console.log("handle Working", value, key)
// //     setForm((prev) => ({ ...prev, [key]: value }))
// //   }


// //   const LoginHandler = async () => {
// //     console.log("mera login funstion chala", form)
// //     try {
// //       let response = await signInWithEmailAndPassword(auth, form.email, form.password)

// //       if (response.user) {

// //         toast.success("user Login sucessfully")
// //       }
// //       console.log(response);


// //     } catch (error) {
// //       console.log(error.message)
// //       console.log(error.code)
// //       if (error.message == "Firebase: Error (auth/invalid-credential)." ||
// //         error.code == "auth/invalid-credential") {

// //         toast.error("Invalid Credential");
// //       }

// //     }
// //   }

// //   // const LoginWithGoolgeHandler = async () => {
// //   //  console.log("mera goole chala");

// //   //   try {
// //   //     const provider = new GoogleAuthProvider();
// //   //   let response = await  signInWithPopup(auth, provider)

// //   //   console.log(response);

// //   //    if(response.user){

// //   //       toast.success("user Login sucessfully")
// //   //     }

// //   //   } catch (error) {
// //   //     toast.error(error.message);

// //   //   }

// //   // }
// //   return (
// //     <>

// //       <Box sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100vh',
// //       }}>
// //         <Paper elevation={2}
// //           sx={{
// //             width: 400,
// //             boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

// //           }}>
// //           <Box sx={{
// //             // marginLeft:'100px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             marginTop: '10px',
// //             marginBottom: '7px'
// //           }}>
// //             <h1>Login</h1>
// //           </Box>



// //           <Input
// //             handler={handleInputChange}
// //             labal={"Enter your Email"}
// //             type={"email"}
// //             value={form.email}
// //           />

// //           <Input
// //             handler={handleInputChange}
// //             labal={"Enter your password"}
// //             type={"password"}
// //             value={form.password}
// //           />


// // <Box sx={{
// //             // marginLeft:'100px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             marginTop: '10px',
// //             marginBottom: '7px'
// //           }}>
// //             <SigninWithGoolge title={"sign in with Google"}/>
// //           </Box>
  
// //           <Box sx={{
// //             // marginLeft:'100px',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             marginTop: '10px',
// //             marginBottom: '7px'
// //           }}>
// //             <Buttons handler={LoginHandler} title='Login' />
// //           </Box>
// //  <Link to={"/signup"}><Typography sx={{ display:'flex',
// //           justifyContent:'center', marginTop:'10px', marginBottom:"10px"}}>Go to signup page ... </Typography></Link>
// //         </Paper>
// //       </Box>
// //       <ToastContainer />

// //     </>
// //   )
// // }

// // export default Login
// import React, { useState } from 'react';
// // getAuth ko hata diya kyunki auth Config se aa raha hai
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Box, Paper, Typography } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Toastify ki CSS zaroori hai agar main file me nahi ki

// // Sahi import path check karlein (component ya components)
// import Input from '../../components/Input.jsx'; 
// import Buttons from '../../components/Button.jsx';
// import SigninWithGoolge from '../../components/SigninWithGoolge.jsx';
// import { auth } from '../../Config.js';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     username: "" // Agar login mein username use nahi ho raha to ise hata bhi sakte hain
//   });

//   const handleInputChange = (key, value) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const LoginHandler = async () => {
//     try {
//       let response = await signInWithEmailAndPassword(auth, form.email, form.password);

//       if (response.user) {
//         toast.success("User Login successfully");
//       }
//     } catch (error) {
//       console.log(error.code);
//       if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
//         toast.error("Invalid Credentials");
//       } else {
//         toast.error(error.message);
//       }
//     }
//   };

//   return (
//     <>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//       }}>
//         <Paper elevation={2}
//           sx={{
//             width: 400,
//             boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//             padding: '20px' // Thoda padding dene se form behtar dikhega
//           }}>
//           <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: '10px',
//             marginBottom: '7px'
//           }}>
//             <h1>Login</h1>
//           </Box>

//           {/* labal ko label kar diya hai */}
//           <Input
//             handler={handleInputChange}
//             label={"Enter your Email"} 
//             type={"email"}
//             value={form.email}
//           />

//           <Input
//             handler={handleInputChange}
//             label={"Enter your password"}
//             type={"password"}
//             value={form.password}
//           />

//           <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: '15px',
//             marginBottom: '7px'
//           }}>
//             <SigninWithGoolge title={"Sign in with Google"}/>
//           </Box>
  
//           <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: '10px',
//             marginBottom: '7px'
//           }}>
//             <Buttons handler={LoginHandler} title='Login' />
//           </Box>

//           <Link to={"/signup"} style={{ textDecoration: 'none' }}>
//             <Typography sx={{ 
//               display:'flex',
//               justifyContent:'center', 
//               marginTop:'15px', 
//               marginBottom:"10px",
//               color: '#1976d2'
//             }}>
//               Go to signup page ...
//             </Typography>
//           </Link>
//         </Paper>
//       </Box>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Paper, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ⚠️ Agar aapke folder ka naam 'components' hai to sabme 'components' likhein, agar 'component' hai to sabme 'component' karein.
// Main yahan assumption le raha hun ke folder ka naam 'components' hai:
import Input from '../../components/Input.jsx'; 
import Buttons from '../../components/Button.jsx';
import SigninWithGoolge from '../../components/SigninWithGoolge.jsx';
import { auth } from '../../Config.js';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate ()
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const LoginHandler = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      let response = await signInWithEmailAndPassword(auth, form.email, form.password);
      if (response.user) {
        toast.success("User Login successfully");
        navigate("/")
      }
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        toast.error("Invalid Credentials");
      } else {
        toast.error(error.message);
      }
    }
  };

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
            padding: '25px'
          }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px'
          }}>
            <h1>Login</h1>
          </Box>

          <Input
            handler={handleInputChange}
            label="Enter your Email" 
            type="email"
            name="email" // State key match karne ke liye name zaroori hai
            value={form.email}
          />

          <Input
            handler={handleInputChange}
            label="Enter your password"
            type="password"
            name="password" // State key match karne ke liye name zaroori hai
            value={form.password}
          />

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            marginBottom: '7px'
          }}>
            <SigninWithGoolge title="Sign in with Google"/>
          </Box>
  
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '7px'
          }}>
            <Buttons handler={LoginHandler} title='Login' />
          </Box>

          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography sx={{ 
              display:'flex',
              justifyContent:'center', 
              marginTop:'15px', 
              color: '#1976d2'
            }}>
              Go to signup page ...
            </Typography>
          </Link>
        </Paper>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Login;
