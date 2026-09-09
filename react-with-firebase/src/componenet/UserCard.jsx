import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/config.js';
import { updateDoc } from "firebase/firestore";

const UserCard = ({data }) => {
    const deleteHandler = async (id) => {
  try {
   
    await deleteDoc(doc(db, "users", id));
    console.log("user delete successfully");
    
  } catch (error) {
    console.log(error);
    
  }


    }

    const eidtUserData = async (currentUser) => {
      
        const newUser = prompt("Enter new username" , currentUser.username) || currentUser.username;      
        const newEmail = prompt("Enter new username" , currentUser.email) || currentUser.email;
        const newAge = prompt("Enter new username" , currentUser.age) || currentUser.age

        const updateUsername = newUser !== null ? newUser : currentUser.username
        const updateEmail = newEmail !== null ? newEmail : currentUser.username
        const updateAge = newAge !== null ? newAge : currentUser.username
  try {
    
    const userRef = doc(db, "users", currentUser);

    // 2. updateDoc use kar ke sirf specific fields ko update karein
    await updateDoc(userRef, {
      username: updateUsername,
      email: updateEmail,
      age: Number(updateAge) // Age ko number mein rakhna behtar hota hai
    });

    console.log("Data successfully updated!");
    alert("Card updated successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
  return (
    <div>
     <div>
      <div>
        <img src={data.profileImage} alt="chupaImagenhimili" height={"100px"} width={"100px"} style={{
          borderRadius:"50%",
          border:"1px solid black"
        }} />
      </div>
       <h1>Username: {data.username}</h1>
      <p>Email : {data.email}</p>
      <p>Age : {data.age}</p>
      </div>

      <div>
        <button onClick={() =>  eidtUserData(data.id) }>Edit</button>
       
        <button onClick={() => deleteHandler(data.id)}>Delete</button>
      </div>
    </div>
  )
}

export default UserCard
