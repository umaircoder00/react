import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './dashboard/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './dashboard/Dashboard'
import Profile from './dashboard/Profile'
import Setting from './dashboard/Setting'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact />} />
       <Route path='/login' element={<Login />} />

       {/* nested routing */}
 <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      
      </Route>


      

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

