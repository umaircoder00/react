import React, { useReducer } from 'react'

const Counter = () => {


    const initialState = {
        count : 0
      }
   
    const reducerFn = (state,action) => {
      switch (action.type) {
        case "Increment":
              
        return{...state, count : state.count + 1}
        case "decrement":
         return{...state, count : state.count - 1}
            case "reset":
        return{...state, count : 0}

        
        default:
            return state;
      }
      // console.log(reducerFn);
      
    }
    const [state , dispatch] = useReducer(reducerFn, 0)
    console.log(state)
  return (
    <div>
    
       count : {state.count}
     
   

      <div>
        <button onClick={() => dispatch({type : "Increment"})}>Increment</button>
        <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
        <button onClick={() => dispatch({type : "reset"})}>reset</button>
      </div>
    </div>
  )
}

export default Counter
