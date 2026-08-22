
import React from 'react'
import Registration from './components/Registration'
import Login from './components/Login'
import Dashboard from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path ="/login" element={<Login />} />
      <Route path ="/Registration" element={<Registration />} />
       <Route path ="/" element={<Home />} />
     
   </Routes>
   </BrowserRouter>
   
   </>
  )
  
}

export default App


