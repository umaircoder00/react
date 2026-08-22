import React from 'react'

const Card = ({data}) => {
  return (
    <div>
      <div className='card'>
        <h1>Username :{ data.username}</h1>
        <p>Age :{ data.age}</p>
        <p>Email:{ data.email}</p>
        <p>Password:{ data.password}</p>
      </div>
    </div>
  )
}

export default Card
