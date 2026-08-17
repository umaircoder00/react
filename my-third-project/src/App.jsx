
// import React, { useState } from 'react'

// let advice = ["learn html", "learn css", "learn js", "learn react"]


// const App = () => {

//   const [step, setStep] = useState(1)
  
//   return (
//     <>
//      <div className='advice'>
//         ADVICE : {advice[step -1]}
//       </div>
//       <ul>
//         <li className={`${step == 1 ? "bg-black text-white" : "bg-gray-200 text-black"}`}>1</li>
//         <li className={`${step == 2 ? "bg-black text-white" : "bg-gray-200 text-black"}`}>2</li>
//         <li className={`${step == 3 ? "bg-black text-white" : "bg-gray-200 text-black"}`}>3</li>
//       </ul>

     
//       <div className='button'>
//         <button onClick={() => step > 1 ? setStep(step -1) : setStep(3)}>pervious</button>
//         <button onClick={() => step !=3 ? setStep(step +1) : setStep(1)}>next</button>
//       </div>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// let advice = ["learn html", "learn css", "learn js", "learn react"]

// const App = () => {

//   const [step,setStep] = useState(1)

//   const nextHandler = () => {
//      if(3 != 3){
//         setStep(step +1)
//      }else{
//       setStep(1)
//      }
//      step != 3 ? setStep(step + 1) : setStep(1)
//   }

//   const previousHandler = () => {
//      if(step > 1 ){
//       setStep(step - 1)
//      }else{
//       setStep(3)
//      }
//      step > 1 ? setStep(step - 1): setStep(3)
//   }


//   return (
//     <>
//       <div className='advice'>
//         ADVICE: {advice[step -1]}
//       </div>
//       <div>
//         <ul>
//           <li>1</li>
//           <li>2</li>
//           <li>3</li>
//         </ul>
//       </div>
//       <div className='button'>
//       <button  onClick={previousHandler}>Previous</button>
//       <button onClick={nextHandler}>Next</button>

//       </div>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'


let advice = ["learn html", "learn css", "learn js"]
const App = () => {
  const [step,setStep] = useState(1)
  // const previousHandler = () => {
  //   step > 1 ? setStep ( step -1) : setStep(3)
  // }

  // const nextHandler = () => {
  //   step != 3 ? setStep (step + 1) : setStep(1)
  // }
  return (
    <>
    <div className='advice'>
      ADVICE: {advice[step  - 1]}
    </div>
    <div >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <div className='button'>
      <button onClick={() => step !=3 ? setStep(step +1) : setStep(3)}>next</button>
      <button onClick={() => step > 1 ? setStep(step -1) : setStep(1)}>previous</button>
    </div>
    </>
  )
}

export default App




