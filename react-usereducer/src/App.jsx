
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './pages/Counter'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/counter' element={<Counter />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
