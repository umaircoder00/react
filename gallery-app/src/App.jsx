
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import axios from 'axios'

const App = () => {
const [data , setData] = useState([])
const [page,setPage] = useState(1)
const [limit,setLimit] = useState(8)
console.log(page);

   const getData = async () => {
    try {
       let result = await axios.get(`https://picsum.photos/v2/list?page${page}=&limit=${limit}`)
     console.log(result.data)
     setData(result.data)
    } catch (error) {
      console.log(error)
    }
   }
  useEffect(() => {
    getData();
  }, [page,limit]);
  return (
   <div >
    
     <div className='flex justify-between flex-col h-screen w-full bg-black'>
      
      <Navbar />
    
      <div className='  h-screen mt-8 gap-7 ml-6 w-full flex flex-wrap overflow-y-auto mb-4'>
          {data.length > 0 ? data.map((item)=> <Body  data={item}/>) : <p  className='text-white font-bold text-center'>loading...</p> }
    </div>

      <Footer setPage={setPage} setLimit={setLimit}/>
    </div>
    
   </div>
  )
}

export default App
