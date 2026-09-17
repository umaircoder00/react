import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'

import Home from './pages/Home'
import Bolg from './pages/Bolg'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<Signup />} /> 
      <Route path='/Login' element={<Login />} /> 

      <Route path='/' element={<Home />} />
      <Route path='/Bolg' element={<Bolg />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
