import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'

// import Home from './pages/Home'

import Home from './pages/Dashboard/Home'
import Blog from './pages/Auth/Blog.jsx'
import ProtectiveRoute from './components/ProtectiveRoute.jsx'
// import NestedModal, { CreateBlogModal } from './components/CreateBlogModal';
// import Blog from './pages/Dashboard/Blog'
// import Blog from './pages/Dashboard/Blog'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/signup' element={<Signup />} /> 
      <Route path='/Login' element={<Login />} /> 

      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<ProtectiveRoute><Blog /></ProtectiveRoute>} />
     
     </Routes>
     </BrowserRouter>
     {/* <CreateBlogModal /> */}
    </div>
  )
}

export default App
