import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';


const auth = getAuth(app);
const login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

     const navigate = useNavigate()
    const loginupHandler = () => {
        // console.log("signup chala")
        // console.log(email,password)

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {   
    console.log("user login kar raha hun",userCredential);
    
    // Signed in 
    
    const user = userCredential.user;
    console.log("user milaa...", userCredential.user);
    // ...
    if(user){
navigate("/")
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error mila",errorCode,errorMessage);
    
  });
    }
    return (
        <div  className='h-screen bg-amber-100 flex items-center justify-center'>
        <div  className='w-[300px] h-[300px] bg-white rounded-3xl shadow-2xl '>
            <h1  className='font-bold ml-22 mt-2.5 text-2xl'>login Page</h1>
            <div>
                <input className='w-[98%] h-[40px] p-4 mt-3 ml-0.5 outline-gray-300' value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Enter your email' />
                <br />
                <input className='w-[98%] h-[40px] p-4 mt-3 ml-0.5 outline-gray-300' value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder='Enter your password' />

                <button  className='ml-30 text-blue-800 font-bold mt-4 mb-2.5' onClick={loginupHandler}>login</button>

                <br />

                <Link className='ml-18 font-bold mt-3.5 ' to={"/signup"}><button>Go to SignUp page</button></Link>
            </div>
        </div>
        </div>
        
    )
}

export default login

