import React from 'react'

const Footer = ({setPage, setLimit}) => {
  return (
     <div  className='w-full h-[50px] bg-gray-800 p-3 flex item-center pl-3 justify-between'>
        <div className='flex item-center'>
      <h1 className='text-white font-bold ml-2 mr-4'>pages</h1>
    <div className='flex gap-5'> 
      {[1,2,3,4,5].map((num) => <button onClick={(e) => setPage(e.target.innerText)} className='cursor-pointer text-white'>{num}</button>)}
      </div>
    </div>
       <select onChange={(e) => setLimit(e.target.value)} className='text-white bg-gray-800 oitline-none'>
        <option value="8">8</option>
         <option value="25">25</option>
          <option value="50">50</option>
           <option value="100">100</option>
    </select>

   
     </div>
  )
}

export default Footer
