import './index.css'
import React from 'react'
import Dashboard from './dasboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './dasboard/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Setting from './pages/Setting'

const App = () => {
  return (
    <div>
      {/* <Dashboard /> */}
      <BrowserRouter>
    
      {/* <Dashboard /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* nested */}

        <Route path='/Dashboard' element={<Dashboard />} >
        <Route path="prfile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
