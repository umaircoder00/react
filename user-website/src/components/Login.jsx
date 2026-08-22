import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Login = () => {
 
    const [form, setFrom] = useState({
      email:"",
      password:"",
    })


    const handlerChange = (value , field) => {
      setFrom((prev) => ({...prev, [field]: value}))
    }

    const loginHandler = () => {
      console.log("login kar diya user ko")
    }
  
  return (
    <div>
     
        
     <div className='input'>
       <Input 
      placeholder = {"Enter your Email"}
      hanlder={handlerChange}
      type = {"email"}
      /> 
      <Input 
       placeholder = {"Enter your password"}
        hanlder={handlerChange}
      type = {"password"}
      
      />
     <Button
     
     title={"Login"} hanlder = {loginHandler}
      />
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis ipsa tenetur laboriosam, corrupti harum, quibusdam repellat perspiciatis voluptatem iure ullam cupiditate beatae illum non fugiat dolorum sint neque voluptates.</p>
     <h3>Sign up?</h3>
     </div>
     
       
    </div>
  )
}

export default Login
