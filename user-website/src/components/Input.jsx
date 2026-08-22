import React from 'react'

const Input = ({placeholder, handler , type,title}) => {
  return (
    <div>
        <input type={title}type={type} placeholder={placeholder} onChange={(e) => handler(e.target.value, type)}/>
    </div>
  )
}

export default Input
