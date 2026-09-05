import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';


const auth = getAuth(app);
const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signupHandler = () => {
        // console.log("signup chala")
        // console.log(email,password)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("user credential",userCredential );
                
                const user = userCredential.user;
               
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               console.log(error.code,error.message);
               
            });
    }
    return (
       <div className='h-screen bg-amber-100 flex items-center justify-center'>
         <div className='w-[300px] h-[300px] bg-white rounded-3xl shadow-2xl '>
            <h1 className='font-bold ml-20 mt-2.5 text-2xl'>SignUp Page</h1>
            <div>
                <input className='w-[98%] h-[40px] p-4 mt-3 ml-0.5 outline-gray-300' value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder='Enter your email' />
                <br />
                <input className='w-[98%] h-[40px] p-4 mt-2.5 ml-0.5 outline-gray-300' value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder='Enter your password' />

                <button className='ml-27 text-blue-800 font-bold mt-4 mb-2.5' onClick={signupHandler}>SignUp</button>

                <br />

                <Link className='ml-20 font-bold mt-3.5 ' to={"/login"}><button>Go to login page</button></Link>
            </div>
        </div>
       </div>
    )
}

export default Signup
