
import React, { useState } from 'react'

const App = () => {
  
    const [count, setCount] = useState(0)
 console.log(count)
    const incrementHandler =() => {
      setCount(count +1)
    }

     const decrementHandler =() => {
      setCount(count -1)
    }
    const handleReset = () => {
    setCount(0); // Yeh value ko wapas 0 kar dega
  };

    console.log(count);
    
  
  return (
    <>
    <h2>Counter App</h2>
    <h1>count is {count}</h1>
        <div className='button'>
           <button onClick={incrementHandler} style ={{margin: '7px', padding: '10px', backgroundColor: 'green', border: 'none' }}>increment</button>
         <button onClick={decrementHandler} style ={{margin: '7px', padding: '10px', backgroundColor: 'yellow', border: 'none'}}>decrement</button>
          <button onClick={handleReset} style={{ margin: '7px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none' }}>
        Reset
      </button>
        </div>
    </>
  )
  console.log(count)
}

export default App
