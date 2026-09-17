import React from 'react'
import Navbar from '../component/Navbar'
import { auth } from '../Config';
import { onAuthStateChanged } from 'firebase/auth';
// import CreateBolgModal from '../component/CreateBolgModal'
// import CreateBlogModal from '../component/CreateBlogModal';

const Bolg = () => {
    // const [users , setUsers] = (null)

    // const getUser = () => {
    //        onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/auth.user
    //       const uid = user.uid;

    //       console.log("user", user);
    //       setUser(user)

    //       // ...
    //     } else {

    //       setUser(null)
    //       // ...
    //     }
    //   });
    // };
    
    // useEffect( () => {
    //   getUser()
    // }, []) 
  return (
    <div>
        <Navbar />
      {/* <CreateBlogModal /> */}
    </div>
  )
}

export default Bolg
