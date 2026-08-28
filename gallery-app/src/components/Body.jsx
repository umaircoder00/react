import React from 'react'

const Body = ({data}) => {
  return (
    <div>
      <div className='bg-gray-800 w-[300px] h-[300px] shodow-2xl  '>
        <img className='w-[290px] h-[240px] p-2 rounded-2xl' src= {data.download_url} alt="" />
        <h1 className='ml-3 font-bold text-white'>{data.author}</h1>
      </div>
    </div>
  )
}

export default Body
