import React from 'react'
import { useSelector } from 'react-redux'

const kuchbhi = () => {

    const count = useSelector((state) => state.count.value) 
  return (
    <div>
      this is a kuch bhi
    </div>
  )
}

export default kuchbhi
