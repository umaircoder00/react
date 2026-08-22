

import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Registration = () => {
  
   const [form,setForm] = useState({
      username:"",
      email:"",
      age:"",
      password:""

    })
  
    const handlerChange = (value , field) => {
      console.log("mera function chala")
       setForm((prev) => ({ ...prev, [field]: value }));
     }

   const  registrationHandler = () => {
    console.log("ma chala")
   }
  return (
    <div className='main2'>
     <Input 
      placeholder = {"Enter your username"}
      handler={handlerChange}
      type={"username"}
     />
     <Input
      placeholder={"Enter your email"}
      handler={handlerChange}
      type={"email"}
      />
     <Input  placeholder={"Enter your age"}
     handler={handlerChange}
      type={"age"}
      />
     <Input placeholder={"Enter your password"}
     handler={handlerChange}
      type={"password"}
      />
     <Button 
     title={"Registration"} 
     handler={registrationHandler}
     />

    </div>
  )
}

export default Registration
