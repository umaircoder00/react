import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter)
  
console.log(count)

const getTextColor = () => {
     if(count.value > 0 ) return 'text-green-500'
     if(count.value < 0 ) return 'text-red-500'
     return 'text-black'
}
  return (
    <div className='flex justify-center m-40'>
  <div className='bg-white w-[300px] h-[300px] shadow-2xl '>
  <div className={`mt-27 ml-15 font-bold ${getTextColor()}`}>
     Counter application : {count.value} 

  </div>
  <div className=''> 
  <button className='bg-green-500 ml-3 text-white w-[80px] mt-20 shadow-2xl ' onClick={() =>dispatch(increment())}>increment</button>
   <button className='bg-red-500 ml-3 text-white w-[80px] mt-20 shadow-2xl' onClick={() => dispatch(decrement())}>decrement</button>
   <button className='bg-blue-500 ml-3 text-white w-[80px] mt-20 'onClick={ () =>dispatch(reset())}>reset</button>
   </div>
  </div>
  </div>
  )
}

export default App
