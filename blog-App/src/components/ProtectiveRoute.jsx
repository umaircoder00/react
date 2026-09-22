import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config.js';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectiveRoute = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

//     // const getUserData = async () => {
       
//         try {
//             onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;

//     // console.log(user)
 
//         setExistUser(user)
// console.log(user);
// console.log(existUser);
       
//   }
//    else {
//     // User is signed out
//     // ...
    

//     setExistUser(null)
    
//   }
//    setLoading(false)
   
//    if(existUser){
//            console.log("jani user maila")
//         }else{
//             // console.log("user nhi mila");
            
//              navigate("/login")
//         }


// if(existUser){
//     console.log("jani user mil gaya")
// }

  
// });
//         } catch (error) {
//             console.log(error.message)
//         }
//     }

     const getUser = () => {
        onAuthStateChanged(auth, (user) => {
          if(user){
            const uid = user.uid

            setUser(user)
            console.log(user)

        }  else{
            setUser(null)
        }

        setLoading(false)
        })
     }
    useEffect(() => {
        getUser()
        return () => getUser()
    },[])

    
if(loading){
    return <p>user a raha ha</p>
}


    if(user){
  return children

    }else{
        return <Navigate to={"/login"} />
    }

  
}

export default ProtectiveRoute
