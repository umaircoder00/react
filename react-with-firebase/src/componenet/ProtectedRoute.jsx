import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
  const [user , setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  
    const getUser = () => {
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    console.log("user m" ,user);
    setUser(user)
  } else {
    setUser(null)

  }

  setLoading(false)
});
    }

    useEffect(() => {
        getUser();

        return() => getUser()
    }, [])

    if(loading) {
        return <h1>loading...</h1>
    }

    if(user){
        
        return children
    }else{
        return <Navigate to={"/login"} />
    }
  
  
}

export default ProtectedRoute
